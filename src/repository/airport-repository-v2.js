const CrudRepository = require("./crud-repository");
const { Airport } = require("../models");

class AirportRepositoryV2 extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepositoryV2;
