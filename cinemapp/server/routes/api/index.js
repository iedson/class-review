const router = require('express').Router();
const movieRoutes = require("./movies");

//api
router.use("/movies", movieRoutes);

module.exports = router;