const express = require("express");
const expr = express();
const routtpath = require("./middleware");
const route = express.Router();
/*
const routpath = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("<h2>Enter Age!!</h2>");
  } else if (req.query.age < 18) {
    resp.send("<h2>You Cannot Access It</h2>");
  } else {
    next();
  }
};
*/
// expr.use(routpath);
/*
expr.get("", routtpath, (req, resp) => {
  resp.send("<h1><center>Welcome</center</h1>");
});

expr.get("/login", (req, resp) => {
  resp.send("<h1><center>Welcome To Login</center></h1>");
});
*/

route.use(routtpath);

route.get("", (req, resp) => {
  resp.send("<h1><center>Welcome</center</h1>");
});

expr.get("/login", (req, resp) => {
  resp.send("<h1><center>Welcome To Login</center></h1>");
});
route.get("/about", (req, resp) => {
  resp.send("<h1><center>Welcome To about</center></h1>");
});

expr.use(route);
expr.listen(2000);
