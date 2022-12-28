const { AirportService } = require("../services");

const airportService = new AirportService();

// POST -> /airport -> req.body
const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a airport",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a airport",
      error: err,
    });
  }
};

// Patch -> /airport/:id -> req.body
const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully updated the Airport",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the Airport",
      error: err,
    });
  }
};

// DELETE -> /airport/:id
const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted the airport",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the airport",
      error: err,
    });
  }
};

const read = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched the airport",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the airport",
      error: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await airportService.getAllAirports(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched the cities",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the cities",
      error: err,
    });
  }
};

const createAll = async (req, res) => {
  try {
    const cities = await airportService.createAllAirports(req.body);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully created all cities",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the cities",
      error: err,
    });
  }
};

module.exports = {
  create,
  update,
  destroy,
  read,
  getAll,
  createAll,
};
