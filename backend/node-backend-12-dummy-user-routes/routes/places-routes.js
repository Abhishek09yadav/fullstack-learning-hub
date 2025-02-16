const express = require("express");
const { check } = require("express-validator");
const placesControllers = require("../controllers/places-controllers");

const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById);
// router.get("/getallplaces", placesControllers.getAllPlaces);

router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("location").not().isEmpty(),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.patch("/:pid", placesControllers.updatePlace);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
