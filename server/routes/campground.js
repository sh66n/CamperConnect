const router = require("express").Router();

const {
  getAllCampgrounds,
  createNewCampground,
  getCampgroundById,
  updateCampground,
  deleteCampground,
} = require("../controllers/campground");

router.route("/").get(getAllCampgrounds).post(createNewCampground);
router
  .route("/:id")
  .get(getCampgroundById)
  .patch(updateCampground)
  .delete(deleteCampground);

module.exports = router;
