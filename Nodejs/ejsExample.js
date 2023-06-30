const express = require("express");
const path = require("path");

const exprpath = path.join(__dirname, "public");
const expr = express();

expr.set("view engine", "ejs");

expr.get("/login", (req, resp) => {
  resp.render("login");
});

expr.get("/profile", (req, resp) => {
  const user = {
    name: "sachinsinh",
    gmail: "sachn123@gmail.com",
    number: 98464646845,
    skil: ["php", "javascript", "nodejs", "ejs", "c", "c++"],
  };
  resp.render("profile", { user });
});
expr.listen(1000);
