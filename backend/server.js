require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

//Create app object
const app = express();

//Port Variable
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());

//Test Route
app.get("/", (req, res) => {
    res.send("Hello World")
});


//JSON Routes
app.get("/projects", (req, res) => {
    res.json(projects);
});

app.get("/about", (req, res) => {
    res.json(about);
});



//Port
app.listen(PORT, () => console.log("Listening on port: ", PORT))