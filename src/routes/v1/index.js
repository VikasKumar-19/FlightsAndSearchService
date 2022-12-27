const express = require("express");

const router = express.Router();

const CityControllers = require("../../controllers/city-controller");
const AirportControllers = require("../../controllers/airport-controller");

//city routes
router.post("/city", CityControllers.create);
router.post("/city/all", CityControllers.createAll);
router.delete("/city/:id", CityControllers.destroy);
router.get("/city/:id", CityControllers.read);
router.patch("/city/:id", CityControllers.update);
router.get("/city", CityControllers.getAll);

//airport routes
router.post("/airport", AirportControllers.create);
router.delete("/airport/:id", AirportControllers.destroy);
router.get("/airport/:id", AirportControllers.read);
router.patch("/airport/:id", AirportControllers.update);

module.exports = router;
