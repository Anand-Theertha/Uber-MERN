const mongoose = require("mongoose");

function connectToDB() {
  // console.log("MongoDB URI:", process.env.DB_CONNECT);

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
