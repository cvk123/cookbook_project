const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./database/connect");



// db.connect();
app.get("/", (request,response) => {
  response.send("Jsi na hlavní stránce");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});