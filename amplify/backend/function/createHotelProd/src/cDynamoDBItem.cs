using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;

namespace createHotelProd
{

    public class AmazonDynamoDBService
    {
        private static AmazonDynamoDBClient client = new AmazonDynamoDBClient();

        public async Task PutItemAsync(string tableName, Dictionary<string, DynamoDBEntry> items)
        {
            var table = Table.LoadTable(client, tableName);
            var document = new Document(items);
            await table.PutItemAsync(document);
        }
        public async Task<Document> GetItemAsync(string tableName, string keyName, string keyValue)
        {
            var table = Table.LoadTable(client, tableName);
            var document = await table.GetItemAsync(keyValue);
            return document;
        }


    }

}