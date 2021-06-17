const router = require("express").Router();
const businessDataRoutes = require("./businessDataRoutes");

// "/api" is prepended when the route reaches here.
// If the API route contains "/businessData", move into the businessDataRoutes folder
router.use("/businessData", businessDataRoutes);

module.exports = router;
