const User = require("../models/user");
const errorResponse = require("../utils/error");

const getWishlist = async (req, res) => {
  try {
    const currUser = await User.findById(req.user.id);
    if (currUser) res.json(currUser.wishlist);
  } catch (e) {
    errorResponse(res, e);
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { campground } = req.body;
    const currUser = await User.findById(req.user.id);
    if (currUser) {
      if (currUser.wishlist.includes(campground._id)) {
        return res.status(409).json({
          message: "This item is already in your wishlist!",
        });
      }
      currUser.wishlist.push(campground._id);
      currUser.save();
      res.json(await currUser.populate("wishlist"));
    }
  } catch (e) {
    errorResponse(res, e);
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const currUser = await User.findById(req.user.id).populate("wishlist");
    if (currUser) {
      currUser.wishlist = currUser.wishlist.filter((campground) => {
        if (campground.id !== id) {
          return campground;
        }
      });
      currUser.save();
      res.json(currUser);
    }
  } catch (e) {
    errorResponse(res, e);
  }
};

module.exports = { getWishlist, addToWishlist, removeFromWishlist };
