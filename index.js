const express = require('express');

const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/public/index.html");
});

app.get("/styleSheet.css", function (req, res) {
    res.sendFile(__dirname+"/public/styleSheet.css");
});

app.get("/animation.css", function (req, res) {
    res.sendFile(__dirname+"/public/animation.css");
});

app.get("/bubble.png", function (req, res) {
    res.sendFile(__dirname+"/public/bubble.png");
});

app.get("/background.jpeg", function (req, res) {
    res.sendFile(__dirname+"/public/background.jpeg");
});

app.get("/ask", function (req, res) {
    res.send("Now your are at about page");
});

app.get("/contact", function (req, res) {
    res.send("Now you are at contact page");
});

app.listen(process.env.PORT || port, function (req, res) {
    console.log(`Server running on http://localhost:${port}/`);
});