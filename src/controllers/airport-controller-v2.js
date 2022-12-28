const { AirportServiceV2 } = require("../services");

const airportServiceV2 = new AirportServiceV2();

const create = async (req, res) => {
  try {
    const response = await airportServiceV2.create(req.body);
    return res.status(201).json({
      data: response,
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

const getAll = () => {};

module.exports = {
  create,
};
