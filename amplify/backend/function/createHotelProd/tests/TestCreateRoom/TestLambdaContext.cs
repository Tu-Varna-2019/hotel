using System;
using Newtonsoft.Json.Linq;
using Amazon.Lambda.Core;

namespace createHotelProd
{

    public class TestLambdaContext : ILambdaContext
    {
        public string AwsRequestId { get; set; }
        public IClientContext ClientContext { get; set; }
        public string FunctionName { get; set; }
        public string FunctionVersion { get; set; }
        public ICognitoIdentity Identity { get; set; }
        public string InvokedFunctionArn { get; set; }
        public ILambdaLogger Logger { get; set; }
        public string LogGroupName { get; set; }
        public string LogStreamName { get; set; }
        public int MemoryLimitInMB { get; set; }
        public TimeSpan RemainingTime { get; set; }

        public TestLambdaContext()
        {
            AwsRequestId = Guid.NewGuid().ToString();
            FunctionName = "TestFunction";
            FunctionVersion = "1.0";
            Logger = new LambdaLogger();
            LogGroupName = "TestLogGroup";
            LogStreamName = "TestLogStream";
            MemoryLimitInMB = 256;
            RemainingTime = TimeSpan.FromMinutes(5);
        }

        private class LambdaLogger : ILambdaLogger
        {
            public void Log(string message)
            {
                Console.WriteLine(message);
            }

            public void LogLine(string message)
            {
                Console.WriteLine(message);
            }
        }
    }
}