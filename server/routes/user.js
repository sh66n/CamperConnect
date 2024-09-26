const router = require("express").Router();
const User = require("../models/user");
const errorResponse = require("../utils/error");

router.patch("/:id", async (req, res) => {
  try {
    const { campground } = req.body;
    console.log(campground);
    const user = await User.findById(req.params.id);
    if (user) {
      user.wishlist.push(campground._id);
      user.save();
      res.json(user);
    }
  } catch (e) {
    errorResponse(res, e);
  }
});

module.exports = router;
