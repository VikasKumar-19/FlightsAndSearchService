const express = require("express");

const router = express.Router(); 

const CityControllers = require('../../controllers/city-controller');

router.use("/city", CityControllers.create);

module.exports = router;