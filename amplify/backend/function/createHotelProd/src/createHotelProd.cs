using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;

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


        // If you rename this function, you will need to update the invocation shim
        // to match if you intend to test the function with 'amplify mock function'
#pragma warning disable CS1998
        public async Task<dynamic> LambdaHandler(LambdaEvent input, ILambdaContext context)
        {
            context.Logger.LogLine($"Received data: {Newtonsoft.Json.JsonConvert.SerializeObject(input)}");

            // Parse body JSON
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

            if (eventBody?.Message == null)
            {
                context.Logger.LogLine("Message is null");
                return new { error = "Message is null" };
            }

            dynamic inputs = null;
            switch (eventBody.Message.DataModel)
            {
                case "Room":
                    inputs = eventBody.Message.Inputs.ToObject<RoomInputs>();
                    break;
                case "Client":
                    inputs = eventBody.Message.Inputs.ToObject<ClientInputs>();
                    break;
                case "Registration":
                    inputs = eventBody.Message.Inputs.ToObject<RegistrationInputs>();
                    break;
                default:
                    context.Logger.LogLine("Unknown DataModel");
                    return new { error = "Unknown DataModel" };
            }

            try
            {
                AmazonDynamoDBService dynamoDBCLient = new AmazonDynamoDBService();
                var tableName = "Room-ozikw4dwr5afrcpwu5cimtumhe-prod";
                var keyName = "id";

                if (inputs != null)
                {
                    if (eventBody.Message.DataModel == "Room")
                    {
                        var roomInputs = inputs as RoomInputs;
                        var keyValue = roomInputs.id;
                        context.Logger.LogLine($"Category: {roomInputs.category} \n ID: {keyValue}");

                        var userDocument = await dynamoDBCLient.GetItemAsync(tableName, keyName, keyValue);
                        context.Logger.LogLine($"User Document: {userDocument.ToJson()}");

                        return userDocument;
                    }
                    else if (eventBody.Message.DataModel == "Client")
                    {
                        var clientInputs = inputs as ClientInputs;
                        context.Logger.LogLine($"SSN: {clientInputs.ssn}");
                    }
                    else if (eventBody.Message.DataModel == "Registration")
                    {
                        var registrationInputs = inputs as RegistrationInputs;
                        context.Logger.LogLine($"dateCreation: {registrationInputs.dateCreation}");
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                context.Logger.LogLine($"Error fetching data from DynamoDB: {ex.Message}");
                throw;
            }
        }
    }
}
