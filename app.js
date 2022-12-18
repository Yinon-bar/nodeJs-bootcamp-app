const express = require("express");

const logger = require("./3-middleware/logger");

const bootcampsController = require("./6-controllers/bootcampsController");

const app = express();

app.use(express.json());

// Example middleware - login
app.use(logger);

// General route
app.use("/api/v1/bootcamps", bootcampsController.router);

const PORT = 3004;

app.listen(PORT, () => {
  console.log("Listening to http:/localhost:3004 requests");
});
