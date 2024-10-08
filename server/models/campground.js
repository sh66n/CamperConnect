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

campgroundSchema.set("toObject", { virtuals: true });
campgroundSchema.set("toJSON", { virtuals: true });

campgroundSchema.virtual("thumbnail").get(function () {
  return this.images.map((image) => {
    const newImageUrl = image.url?.replace(
      "/upload",
      "/upload/c_fill,h_500,w_500"
    );
    image.url = newImageUrl;
    return image;
  });
});

campgroundSchema.virtual("leader").get(function () {
  return this.images.map((image) => {
    const newImageUrl = image.url?.replace(
      "/upload/c_fill,h_500,w_500",
      "/upload/c_fill,h_400,w_600"
    );
    image.url = newImageUrl;
    return image;
  });
});

campgroundSchema.virtual("followers").get(function () {
  return this.images.map((image) => {
    const newImageUrl = image.url?.replace(
      "/upload/c_fill,h_400,w_600",
      "/upload/c_fill,h_200,w_300"
    );
    image.url = newImageUrl;
    return image;
  });
});

const Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground;
