// const { MongoClient } = require("mongodb");
// const url = "mongodb://127.0.0.1/27017";
// const client = new MongoClient(url);

// async function dbconnect() {
//   let conn = await client.connect();
//   let dbconn = conn.db("nodejsdb");
//   return dbconn.collections("crud");
// }
// module.exports = dbconnect;
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function dbconnect() {
  let conn = await client.connect();
  let dbconn = conn.db("nodejsdb");
  return dbconn.collection("crud");
}
module.exports = dbconnect;
