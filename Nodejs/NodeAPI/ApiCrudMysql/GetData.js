const express = require("express");
const conn = require("./connect");
const app = express();
app.use(express.json());

app.get("/", (req, resp) => {
  conn.query("SELECT * FROM `Crud`", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
  });
});

app.post("/insert", (req, resp) => {
  //   const data = {
  //     name: "prem",
  //     gmail: "prem23@gmail.com",
  //     phone: 657648674,
  //     password: "2edwdwd672787",
  //   };
  const data = req.body;
  conn.query("INSERT INTO Crud SET ? ", data, (err, result, filed) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
  });
});

app.put("/update/:id", (req, resp) => {
  //   const data = ["gandu", "gandu868@gmail.com", 12, "gandu87878", 46];
  const data = [
    req.body.name,
    req.body.gmail,
    req.body.phone,
    req.body.password,
    req.params.id,
  ];
  conn.query(
    "update Crud set Name = ?,Gmail = ?,Phone = ?,Password = ? where id = ?",
    data,
    (err, result, filed) => {
      if (err) {
        resp.send("errr");
      } else {
        resp.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, resp) => {
  const data = [req.params.id];
  //   const data = [45];
  conn.query("DELETE FROM Crud WHERE id = ?", data, (err, result, field) => {
    if (err) {
      resp.send(err);
    } else {
      resp.send(result);
    }
  });
});
app.listen(4000);
