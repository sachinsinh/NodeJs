const dbconnect = require("./connection.js");
const update = async () => {
  let db = await dbconnect();
  let data = await db.updateMany(
    { name: "aa" },
    { $set: { gmail: "aaaaaaaaaaaaaa@gmail.com" } }
  );
  console.log(data);
};
update();
