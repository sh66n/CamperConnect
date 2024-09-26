const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { Campground } = require("./campground");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Campground",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
