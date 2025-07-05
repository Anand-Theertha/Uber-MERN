const mongoose = require("mongoose");

function connectToDB() {
  const MONGO_URI = "mongodb://localhost:27017/uber-mern";
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

module.exports = connectToDB;
