const express = require("express");
const path = express();

path.get("", (req, resp) => {
  resp.send("This Is My First Express Page");
});

path.get("/express", (req, resp) => {
  resp.send("This Is My Second Page");
});
path.listen(3000);
