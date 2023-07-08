const mongoose = require("mongoose");
let crudSchema = new mongoose.Schema({
  name: String,
  gmail: String,
  phone: Number,
});

module.exports = mongoose.model("cruds", crudSchema);
