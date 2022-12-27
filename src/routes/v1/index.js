const express = require("express");

const router = express.Router();

const CityControllers = require("../../controllers/city-controller");

router.post("/city", CityControllers.create);
router.post("/city/all", CityControllers.createAll);
router.delete("/city/:id", CityControllers.destroy);
router.get("/city/:id", CityControllers.read);
router.patch("/city/:id", CityControllers.update);
router.get("/city", CityControllers.getAll);

module.exports = router;