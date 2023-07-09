const express = require("express");
const EventEmiter = require("events");
const app = express();
const event = new EventEmiter();

let count = 0;
event.on("Emitted", () => {
  count++;
  console.log("Event Called No:--  " + count);
});

app.get("/", (req, resp) => {
  resp.send("Api called");
  event.emit("Emitted");
});

app.get("/search", (req, resp) => {
  resp.send("search Api called");
  event.emit("Emitted");
});

app.get("/ssearch", (req, resp) => {
  resp.send("ssearch Api called");
  event.emit("Emitted");
});
app.listen(4000);
