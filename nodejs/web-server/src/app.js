const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "The Vinh"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "The Vinh"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text."
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
