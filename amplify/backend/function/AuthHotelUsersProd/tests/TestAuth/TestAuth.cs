//namespace TestAuth;
using System;
using Newtonsoft.Json.Linq;
using Amazon.Lambda.Core;


namespace AuthHotelUsersProd
{
    public class TestAuth
    {
        [Fact]
        public async Task TestSSNPassport()
        {

            var input = new JObject();
            var requestObject = new JObject();
            var userAttributesObject = new JObject();
            userAttributesObject.Add("custom:SocialSecurityNumber", "9303084661");
            userAttributesObject.Add("custom:Passport", "BG1234567");
            requestObject.Add("userAttributes", userAttributesObject);
            input.Add("request", requestObject);

            var auth = new AuthHotelUsersProd();
            var context = new TestLambdaContext();

            var result = await auth.LambdaHandler(input, context);

            Assert.Equal(input, result);
        }
    }
}