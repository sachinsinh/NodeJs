const express = require("express");
const multer = require("multer");
const app = express();

const uploadedd = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + "_" + Date.now() + ".jpg");
    },
  }),
}).single("uniquw_filed");
app.post("/upload", uploadedd, (req, resp) => {
  resp.send("uplodaed");
});
app.listen(4000);
