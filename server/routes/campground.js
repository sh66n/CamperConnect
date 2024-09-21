const router = require("express").Router();
const { verifyToken } = require("../middlewares");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

const {
  getAllCampgrounds,
  createNewCampground,
  getCampgroundById,
  updateCampground,
  deleteCampground,
} = require("../controllers/campground");

router
  .route("/")
  .get(getAllCampgrounds)
  .post(verifyToken, upload.array("img"), createNewCampground);
router
  .route("/:id")
  .get(getCampgroundById)
  .patch(verifyToken, updateCampground)
  .delete(verifyToken, deleteCampground);

module.exports = router;
