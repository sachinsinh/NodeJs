const express = require("express");
const path = require("path");

const dirpath = path.join(__dirname, "public");
const exp = express();

exp.use(express.static(dirpath));
exp.listen(5000);
