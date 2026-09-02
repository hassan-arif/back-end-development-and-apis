import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import weatherRouter from "./weather.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/weather", weatherRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/info", (req, res) => {
    res.json({
        name: "Weather Service API",
        version: "1.0.0",
        endpoints: ["/api/weather/:city", "/api/greet/:name", "/api/data"],
    });
});

app.get("/docs", (req, res) => {
    res.redirect("/api/info");
});

app.get("/api/greet/:name", (req, res) => {
    res.json({
        "name": `${req.params.name}`
    })
});

app.route("/api/data")
    .get((req, res) => {
        res.status(200).json({})
    })
    .post((req, res) => {
        res.status(201).json({})
    })

app.listen(PORT, () => { })