const express = require("express");
const crudb = require("./mongodb");
require("./config");
const app = express();
app.use(express.json());

app.get("/search/:key", async (req, resp) => {
  let data = await crudb.find({
    "$or": [{ "name": { $regex:req.params.key } }],
  });
  resp.send(data);
  console.log(data);
});
app.listen(1000);
