const express = require("express");

const totalStars = require("./api/totalStars");
const drawStars = require("./tiles/stars");

const app = express();

app.get("/stars", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "max-age=0, no-cache, no-store, must-revalidate");

    console.log(`/stars request for username ${req.query.username || "blank"}`);

    if(!req.query.username) return res.send(drawStars(0));
    totalStars(req.query.username).then(stars => {
        return res.send(drawStars(stars));
    });
});

app.listen(process.env.PORT || "8080", () => {
    console.log("Server Started");
});