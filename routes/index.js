const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// When the API route first enters, it's "/"
// If the API route has "/api" move into the "apiRoutes" folder
router.use("/api", apiRoutes);

module.exports = router;
