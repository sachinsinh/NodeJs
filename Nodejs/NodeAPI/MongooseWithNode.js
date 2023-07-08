const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nodejsdb");
let crudSchema = new mongoose.Schema({
  name: String,
  gmail: String,
  phone: Number,
});

const saveData = async () => {
  let crudModel = mongoose.model("crud", crudSchema);
  let data = new crudModel({
    name: "goku",
    gmail: "goku@gmail.com",
    phone: 7171717171,
    price: 14000,
  });
  let result = await data.save();
  console.log(result);
};
// saveData();

const updateData = async () => {
  let crudModel = mongoose.model("cruds", crudSchema);
  let updData = await crudModel.updateOne(
    { name: "goku" },
    { $set: { phone: 84848484 } }
  );
  console.log(updData);
};
// updateData();

const deletData = async () => {
  let crudModel = mongoose.model("cruds", crudSchema);
  let data = await crudModel.deleteOne({ name: "tttttt" });
  console.log(data);
};
// deletData();

const findData = async () => {
  let crudModel = mongoose.model("cruds", crudSchema);
  let data = await crudModel.find({ name: "goku" });
  console.log(data);
};
// findData();
