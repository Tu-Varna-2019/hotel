using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

namespace createHotelProd
{
    public interface IInputs { }

    public class RoomInputs : IInputs
    {
        public string id { get; set; }
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
}