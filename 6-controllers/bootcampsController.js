const express = require("express");
const router = express.Router();
const bootcampsLogic = require("../5-logic/bootcampsLogic");

// GET all
router.get("/", (req, res) => {
  const bootcamps = bootcampsLogic.getBootcamps();
  res.json(bootcamps);
});

// GET one
router.get("/:bootId", (req, res) => {
  const bootcamps = bootcampsLogic.getBootcamps();
  const selectedBootcamp = bootcamps.find((b) => b.id === +req.params.bootId);
  res.json(selectedBootcamp);
});

module.exports = {
  router,
};
