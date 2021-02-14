"use strict";
const compression = require("compression");
const path = require("path");
const express = require("express");
const app = express(); // create express app
const PORT = process.env.PORT || 5000;
app.use(compression())
app.use('/static', express.static(path.join(__dirname, "dist", "co2-calculator-rev2")))

app.listen(PORT, async () => console.log(`Listening on port ${PORT}!`));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "dist", "co2-calculator-rev2", "index.html"));
});