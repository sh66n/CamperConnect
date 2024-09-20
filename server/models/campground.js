const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const campgroundSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
const Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground;
