const express = require("express");

const router = express.Router();

const CityControllers = require("../../controllers/city-controller");

router.post("/city", CityControllers.create);
router.delete("/city/:id", CityControllers.destroy);
router.get("/city/:id", CityControllers.read);
router.patch("/city/:id", CityControllers.update);

module.exports = router;