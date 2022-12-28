const CrudService = require("./crud-service");
const { AirportRepositoryV2 } = require("../repository");

class AirportServiceV2 extends CrudService {
  constructor() {
    const airportRepository = new AirportRepositoryV2();
    super(airportRepository);
  }
}

module.exports = AirportServiceV2;
