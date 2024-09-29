const router = require("express").Router();
const { verifyToken } = require("../middlewares");
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
} = require("../controllers/wishlist");

router
  .route("/")
  .get(verifyToken, getWishlist)
  .post(verifyToken, addToWishlist);

router.route("/:id").delete(verifyToken, removeFromWishlist);
module.exports = router;
