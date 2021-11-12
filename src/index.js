const express = require("express");

const totalStars = require("./api/totalStars");
const drawStars = require("./tiles/stars");

const flags = process.argv.slice(2);

const app = express();

app.get("/", (req, res) => {
    // only do this in production, to stop auto redirects
    if(!flags.includes("--dev")) res.redirect("https://github.com/Arkanic/github-stats");
    else res.send("running dev mode");
});

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