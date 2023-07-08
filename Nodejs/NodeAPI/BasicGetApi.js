const express = require("express");
const mongodb = require("mongodb");
const dbconnect = require("./connnectdb.js");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  //GEt Data
  let Rdata = await dbconnect();
  Rdata = await Rdata.find().toArray();
  resp.send(Rdata);
});

app.post("/", async (req, resp) => {
  //Insert DAta Using Postman
  let Pdata = await dbconnect();
  let data = await Pdata.insertOne(req.body);
  resp.send(data);
});

app.put("/:name", async (req, resp) => {
  //Update Data USing Postman
  let Pdata = await dbconnect();
  // let data = Pdata.updateOne({name:"jay"},{$set:req.body});
  // let data = Pdata.updateOne({ name: req.body.name }, { $set: req.body });
  let data = Pdata.updateOne({ name: req.params.name }, { $set: req.body });
  resp.send({ Data: "Updated" });
});

app.delete("/:id", async (req, resp) => {
  //Delete Using Postman
  let Ddata = await dbconnect();
  let data = Ddata.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  resp.send({ data });
});
app.listen(1000);
