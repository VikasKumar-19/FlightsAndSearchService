const { FlightService } = require("../services");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfuly created a flight",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      error: err,
    });
  }
};

const getAFlight = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Successfuly fetched a flight",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetched a flight",
      error: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flights,
      success: true,
      message: "Successfuly fetched the flights",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      error: err,
    });
  }
};

module.exports = {
  create,
  getAFlight,
  getAll,
};
