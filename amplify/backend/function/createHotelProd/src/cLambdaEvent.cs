using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

namespace createHotelProd
{
    public class Message
    {
        public string DataModel { get; set; }
        public JObject Inputs { get; set; }
    }



    public class LambdaEventBody
    {
        public Message Message { get; set; }
        public string Path { get; set; }
    }


    public class LambdaEvent
    {
        public string version { get; set; }
        public string routeKey { get; set; }
        public string body { get; set; }
    }
}