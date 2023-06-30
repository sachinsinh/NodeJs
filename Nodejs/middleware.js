module.exports = routpath = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("<h2>Enter Age:</h2>");
  } else if (req.query.age < 19) {
    resp.send("You Cannot View The Page");
  } else {
    next();
  }
};
