const dbconnect = require("./connection.js");

const deleteData = async () => {
  let db = await dbconnect();
  let data = await db.deleteOne({ name: "aa" });
  if (data.acknowledged) {
    console.log("Deleted Successfully");
  }
};
deleteData();
