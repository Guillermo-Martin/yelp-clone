const router = require("express").Router();

// Functions from the "businessDataController"
const { getAllBusinessData } = require("./../../../controllers/businessDataController");

// Route reached here:  "/api/businessData"
router.route("/")
  .get(getAllBusinessData)
 
module.exports = router;
