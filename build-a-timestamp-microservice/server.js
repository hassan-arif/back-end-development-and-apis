import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

app.get("/api/:date", (req, res) => {
  const date = /^\d+$/.test(req.params.date)
    ? new Date(Number(req.params.date))
    : new Date(req.params.date);

  if (req.params.date && !Number.isNaN(date.getTime())) {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
  } else {
    res.json({
      error: "Invalid Date"
    })
  }
});

app.get("/api/", (req, res) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  })
});

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
