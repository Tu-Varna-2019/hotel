using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

// If you rename this namespace, you will need to update the invocation shim
// to match if you intend to test the function with 'amplify mock function'
namespace createHotelProd
{
    // If you rename this class, you will need to update the invocation shim
    // to match if you intend to test the function with 'amplify mock function'
    public class createHotelProd
    {
        /// <summary>
        /// Your Lambda's input type.
        /// Change this to match whatever event you intend to send, or
        /// use one of the Amazon.Lambda.XXXEvents NuGet packages
        /// </summary>
        /// 

        public interface IInputs { }

        public class RoomInputs : IInputs
        {
            public string category { get; set; }
            public int floor { get; set; }
            public int beds { get; set; }
            public string price { get; set; }
            public string PKRegistration { get; set; }
        }

        public class ClientInputs : IInputs
        {
            public string name { get; set; }
            public string ssn { get; set; }
            public string address { get; set; }
            public string passport { get; set; }
            public string PKRegistration { get; set; }
        }

        public class RegistrationInputs : IInputs
        {
            public string dateCreation { get; set; }
            public string dateStart { get; set; }
            public string dateEnd { get; set; }
            public string FKClients { get; set; }
            public string FKRooms { get; set; }
        }

        public class Message
        {
            public string DataModel { get; set; }
            public RoomInputs Inputs { get; set; }
        }



        public class LambdaEventBody
        {
            public string path { get; set; }
            public string DataModel { get; set; }
            public JObject Inputs { get; set; } // Temporarily hold the JSON as JObject
        }


        public class LambdaEvent
        {
            public string version { get; set; }
            public string routeKey { get; set; }
            public string body { get; set; }
        }


        // If you rename this function, you will need to update the invocation shim
        // to match if you intend to test the function with 'amplify mock function'
#pragma warning disable CS1998
        public async Task<dynamic> LambdaHandler(LambdaEvent input, ILambdaContext context)
        {
            context.Logger.LogLine($"Received data: {Newtonsoft.Json.JsonConvert.SerializeObject(input)}");

            // Parse the body JSON
            LambdaEventBody eventBody = null;
            try
            {
                eventBody = Newtonsoft.Json.JsonConvert.DeserializeObject<LambdaEventBody>(input.body);
            }
            catch (Exception ex)
            {
                context.Logger.LogLine($"Error parsing JSON: {ex.Message}");
                return new { error = "Error parsing body JSON" };
            }

            // Conditional Deserialization
            dynamic inputs = null; // Use dynamic to hold the deserialized inputs
            switch (eventBody.DataModel)
            {
                case "Room":
                    inputs = eventBody.Inputs.ToObject<RoomInputs>();
                    break;
                case "Client":
                    inputs = eventBody.Inputs.ToObject<ClientInputs>();
                    break;
                case "Registration":
                    inputs = eventBody.Inputs.ToObject<RegistrationInputs>();
                    break;
                default:
                    context.Logger.LogLine("Unknown DataModel");
                    return new { error = "Unknown DataModel" };
            }

            // Now you can access properties from inputs based on its actual type
            if (inputs != null)
            {
                // Example: Logging based on DataModel
                if (eventBody.DataModel == "Room")
                {
                    var roomInputs = inputs as RoomInputs;
                    context.Logger.LogLine($"Category: {roomInputs.category}");
                    //... process other RoomInputs data
                }
                else if (eventBody.DataModel == "Client")
                {
                    var clientInputs = inputs as ClientInputs;
                    context.Logger.LogLine($"SSN: {clientInputs.ssn}");
                }
                else if (eventBody.DataModel == "Registration")
                {
                    var registrationInputs = inputs as RegistrationInputs;
                    context.Logger.LogLine($"dateCreation: {registrationInputs.dateCreation}");
                }
            }

            return new
            {
                key1 = "someValue", // Example response, modify as needed
                                    //...
            };
        }



    }
}
