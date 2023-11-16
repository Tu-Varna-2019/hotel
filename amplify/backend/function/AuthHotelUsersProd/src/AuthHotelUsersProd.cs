using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;
//using Amazon.Lambda.CognitoEvents;
using System.Text.Json;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text.RegularExpressions;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

// If you rename this namespace, you will need to update the invocation shim
// to match if you intend to test the function with 'amplify mock function'
namespace AuthHotelUsersProd
{
    // If you rename this class, you will need to update the invocation shim
    // to match if you intend to test the function with 'amplify mock function'
    public class AuthHotelUsersProd
    {
        /// <summary>
        /// A Lambda function to respond to HTTP Get methods from API Gateway
        /// </summary>
        /// <param name="request"></param>
        /// <returns>The list of blogs</returns>
        /// <remarks>
        /// If you rename this function, you will need to update the invocation shim
        /// to match if you intend to test the function with 'amplify mock function'
        /// </remarks>
#pragma warning disable CS1998
        private readonly Regex REGEX_PASSPORT = new Regex(@"^[A-Z]{2}\d{7}$");
        public async Task<JObject> LambdaHandler(JObject input, ILambdaContext context)
        {
            context.Logger.LogLine($"Received event: {input.ToString()}");

            // Access payload
            var userAttributes = input["request"]["userAttributes"].ToObject<Dictionary<string, string>>();

            // PreSignUp_SignUp
            // var triggerSource = input["triggerSource"].ToString();

            // Access custom:SocialSecurityNumber and custom:Passport
            var socialSecurityNumber = userAttributes["custom:SocialSecurityNumber"];
            var passport = userAttributes["custom:Passport"];
            context.Logger.LogLine($"Social Security Number: {socialSecurityNumber}");
            context.Logger.LogLine($"Passport: {passport}");

            // Validate EGN
            ValidateEGN(socialSecurityNumber, context);

            // Validate Passport
            if (!REGEX_PASSPORT.IsMatch(passport))
            {
                throw new Exception("Invalid Passport. It should be two capital letters followed by 7 digits.");
            }

            return input;
        }

        private void ValidateEGN(string egn, ILambdaContext context)
        {
            // year, month, and day, eg "88-08-25"
            int year = int.Parse(egn.Substring(0, 2));
            int month = int.Parse(egn.Substring(2, 2));
            int day = int.Parse(egn.Substring(4, 2));

            // if month <=> 1 and 12, add 1900 to year
            if (month >= 1 && month <= 12)
            {
                year += 1900;
            }
            // If the month <=> 41 and 52, add 2000 to year and month - 40 
            else if (month >= 41 && month <= 52)
            {
                year += 2000;
                month -= 40;
            }
            else
            {
                throw new ArgumentException("Invalid EGN. Month is not valid.");
            }

            // Validate date
            if (!IsValidDate(year, month, day))
            {
                throw new ArgumentException("Invalid EGN. Date is not valid.");
            }

            // Calculate checksum
            int[] weights = { 2, 4, 8, 5, 10, 9, 7, 3, 6 };
            int checksum = egn.Substring(0, 9).Select((digit, index) => weights[index] * int.Parse(digit.ToString())).Sum() % 11;
            checksum = checksum == 10 ? 0 : checksum;

            // Is checksum is valid
            if (checksum != int.Parse(egn[9].ToString()))
            {
                throw new ArgumentException("Invalid EGN. Checksum is not valid.");
            }
            context.Logger.LogLine($"EGN is valid: \n Year: {year} \n Month: {month} \n Day: {day}");
        }

        // Helper function to validate the date
        private bool IsValidDate(int year, int month, int day)
        {
            try
            {
                DateTime birthDate = new DateTime(year, month, day);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
