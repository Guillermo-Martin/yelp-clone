const router = require("express").Router();

// Functions from the "businessDataController"
const { getAllBusinessData, searchAllBusinessData } = require("./../../../controllers/businessDataController");

// Route reached here:  "/api/businessData"
router.route("/")
  .get(getAllBusinessData);

// Route reached here:  "/api/businessData/search"
router.get("/search", searchAllBusinessData);


module.exports = router;
