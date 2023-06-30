const express = require("express");
const path = require("path");

const exprpath = path.join(__dirname, "public");
const expr = express();

expr.set("view engine", "ejs");

expr.get("/profile", (req, resp) => {
  const user = {
    name: "sachinsinh",
    gmail: "sachn123@gmail.com",
    number: 98464646845,
  };
  resp.render("profile", { user });
});
expr.listen(4000);
