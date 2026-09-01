import express from "express";
import { inputCleaner, inputValidator } from "./middleware.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/form");
});

app.get("/form", (req, res) => {
    res.sendFile("index.html", { root: "./public" });
});

app.post(
    "/submit",
    inputCleaner,
    inputValidator,
    (req, res) => {
        res.send(req.body);
    }
);

app.listen(port, () => { });