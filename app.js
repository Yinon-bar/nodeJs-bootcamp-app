const express = require("express");

const app = express();

const PORT = 3004;

app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "All Bootcamps" });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update a bootcamp ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log("Listening to http:/localhost:3004 requests");
});
