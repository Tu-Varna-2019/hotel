using System;
using Newtonsoft.Json.Linq;
using Amazon.Lambda.Core;

namespace createHotelProd
{

    public class TestCreateRoom
    {
        [Fact]
        public async Task TestRoomPayload()
        {
            // var input = new JObject();
            // var messageObject = new JObject();
            // var inputsObject = new JObject();
            // inputsObject.Add("id", "1");
            // inputsObject.Add("category", "single");
            // inputsObject.Add("floor", "1");
            // inputsObject.Add("beds", "1");
            // inputsObject.Add("price", "100");
            // inputsObject.Add("PKRegistration", "1");
            // messageObject.Add("DataModel", "Room");
            // messageObject.Add("Inputs", inputsObject);
            // input.Add("Message", messageObject);
            // input.Add("Path", "/createRoom");

            // var createHotel = new createHotelProd();
            // var context = new TestLambdaContext();

            // var result = createHotel.LambdaHandler(input, context);

            //Assert.Equal(input, result);

            var inputsObject = new JObject
        {
            { "id", "1" },
            { "category", "single" },
            { "floor", 1 },
            { "beds", 1 },
            { "price", "100" },
            { "PKRegistration", "1" }
        };

            var messageObject = new JObject
        {
            { "DataModel", "Room" },
            { "Inputs", inputsObject }
        };

            var lambdaEventBody = new JObject
        {
            { "Message", messageObject },
            { "Path", "/createRoom" }
        };

            var lambdaEvent = new LambdaEvent
            {
                body = lambdaEventBody.ToString()
            };

            var createHotel = new createHotelProd();
            var context = new TestLambdaContext();

            var result = await createHotel.LambdaHandler(lambdaEvent, context);

            Assert.NotNull(result);
        }
    }
}