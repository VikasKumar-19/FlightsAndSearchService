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
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      error: err,
    });
  }
};

module.exports = {
  create
};
