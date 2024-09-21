const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const campgroundSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground;
