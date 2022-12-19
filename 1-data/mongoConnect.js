const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/bradTraversy");
  console.log("Connected to mongo!");
}

module.exports = main;
