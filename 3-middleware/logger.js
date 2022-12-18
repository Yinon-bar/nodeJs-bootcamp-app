const express = require("express");

function logger(req, res, next) {
  console.log(`Request method: ${req.method} | URL: ${req.originalUrl}`);
  next();
}

module.exports = logger;
