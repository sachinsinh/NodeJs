const express = require("express");
const path = require("path");

const exprpath = path.join(__dirname, "public");
const expr = express();

expr.set("view engine", "ejs");

expr.get("/profile", (req, resp) => {
  resp.render("profile");
});
expr.listen(2000);
