const express = require("express");
const crudb = require("./mongodb");
const mongodb = require("mongodb");
const app = express();
require("./config");

app.use(express.json());

app.post("/create", async (req, resp) => {
  //insert data to database
  let data = new crudb(req.body);
  let result = await data.save();
  resp.send(result);
  if (data.acknowledged) {
    console.log("Inserted");
  }
});

app.get("/list", async (req, resp) => {
  let data = await crudb.find();
  resp.send(data);
  if (data.acknowledged) {
    console.log("list");
  }
});

app.put("/update/:name", async (req, resp) => {
  let updata = await crudb.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send(updata);
  if (updata.acknowledged) {
    console.log("updated");
  }
});

app.delete("/delete/:id", async (req, resp) => {
  let deldata = await crudb.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(deldata);
  if (deldata.acknowledged) {
    console.log("Deleted");
  }
});

app.listen(5000);
