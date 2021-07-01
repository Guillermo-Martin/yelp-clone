const router = require("express").Router();

// Functions from the "businessDataController"
const { getAllBusinessData, searchAllBusinessData, getOneBusinessDetails } = require("./../../../controllers/businessDataController");

// Route reached here:  "/api/businessData"
router.route("/")
  .get(getAllBusinessData);

// Route reached here: "/api/businessData/:id"
router.get("/:id", getOneBusinessDetails);

// Route reached here:  "/api/businessData/search/:businessInput/:cityInput"
router.get("/search/:businessInput/:cityInput", searchAllBusinessData);


module.exports = router;
