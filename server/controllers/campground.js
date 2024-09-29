const Campground = require("../models/campground");
const errorResponse = require("../utils/error");

const getAllCampgrounds = async (req, res) => {
  try {
    const allCampgrounds = await Campground.find({});
    res.json(allCampgrounds);
  } catch (e) {
    console.log(e);
    errorResponse(res, e);
  }
};

const createNewCampground = async (req, res) => {
  try {
    const { name, price, location, description } = req.body;
    const newCampground = await Campground.create({
      name,
      price,
      location,
      description,
    });
    newCampground.images = req.files.map((img) => {
      return {
        url: img.path,
        filename: img.filename.split("/")[1],
      };
    });
    newCampground.author = req.user.id;
    await newCampground.save();
    res.json(newCampground);
  } catch (e) {
    console.log(e);
    errorResponse(res, e);
  }
};

const getCampgroundById = async (req, res) => {
  try {
    const { id } = req.params;
    const requestedCampground = await Campground.findById(id).populate(
      "author"
    );
    res.json(requestedCampground);
  } catch (e) {
    console.log(e);
    errorResponse(res, e);
  }
};

const updateCampground = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCampground = await Campground.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCampground);
  } catch (e) {
    console.log(e);
    errorResponse(res, e);
  }
};

const deleteCampground = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCampground = await Campground.findByIdAndDelete(id, {
      new: true,
    });
    res.json(deletedCampground);
  } catch (e) {
    console.log(e);
    errorResponse(res, e);
  }
};

module.exports = {
  getAllCampgrounds,
  createNewCampground,
  getCampgroundById,
  updateCampground,
  deleteCampground,
};
