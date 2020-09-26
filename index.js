const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

const solution = require("./solution");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json()); // receive json data from Post request
app.get("/", (req, res) => res.render("pages/index"));
app.post("/", (req, res) => solution.rootPost(req, res));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
