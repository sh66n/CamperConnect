const mongoose = require("mongoose");

const connectDb = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDb;
