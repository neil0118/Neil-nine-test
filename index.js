const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

const rootPost = (req, res) => {
  console.log(req.body.payload);
  res.send("POST request to the homepage");
};

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json()); // receive json data from Post request
app.get("/", (req, res) => res.render("pages/index"));
app.post("/", (req, res) => rootPost(req, res));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
