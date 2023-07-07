const dbconnect = require("./connection.js");

const insert = async () => {
  let db = await dbconnect();
  //   let result = await db.insertOne()
  let result = await db.insertMany([
    { name: "aa", gmail: "aa11@gmail.com", phone: 1111111 },
    { name: "bb", gmail: "bb22@gmail.com", phone: 222222 },
    { name: "cc", gmail: "cc33@gmail.com", phone: 3333 },
  ]);
  if (result.acknowledged) {
    console.log("Data Inserted Successfully");
  }
};
insert();
