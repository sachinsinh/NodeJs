const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Php",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

conn.query("select * from Crud", (err, result) => {
  console.log(result);
});
