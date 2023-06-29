const express = require("express");
const expr = express();

expr.get("", (req, resp) => {
  resp.send(`
  <h1><center>This is First Page</center></h1>
  <a href="/about" >Click To Go About Page</a>
  `);
});

expr.get("/about", (req, resp) => {
  resp.send(`
  <center><h2>This is Send Page</h2></center>
  <input type="text" placeholder="ENter Name" value=${req.query.name}>
  <button>submit</button><br>  
  <a href="/">Click To Go Back</a>
  `);
});

expr.listen(4000);
