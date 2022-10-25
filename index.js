const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("course api running");
});

app.listen(port, () => {
  console.log("course server running on port: ", port);
});

const courses = require("./data/course.json");
app.get("/courses", (req, res) => {
  res.send(courses);
});
