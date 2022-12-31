const express = require("express");

const router = express.Router();

const CityControllers = require("../../controllers/city-controller");
const AirportControllers = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportControllersV2 = require("../../controllers/airport-controller-v2");
const { FlightMiddlewares } = require("../../middlewares");

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

//airportV2 routes
router.post("/airports", AirportControllersV2.create);

//flight routes
router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights/:id", FlightController.getAFlight);
router.get("/flights", FlightController.getAll);
router.patch("/flights/:id", FlightController.update)

module.exports = router;
