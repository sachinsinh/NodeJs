const express = require("express");
const path = require("path");

const dirpath = path.join(__dirname, "public");
const expr = express();

expr.get("/helpp", (req, resp) => {
  resp.sendFile(dirpath + "/about.html");
});
expr.get("/help", (req, resp) => {
  resp.sendFile(`${dirpath}/home.html`);
});
expr.get("*", (req, resp) => {
  resp.sendFile(`${dirpath}/noPage.html`);
});

expr.listen(400);
