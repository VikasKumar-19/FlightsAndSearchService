const { Airport } = require("../models");
const { Op } = require("sequelize");

class AirportRepository {
  async createAirport(data) {
    try {
      const airport = await Airport.create(data);
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async createAllCities(data) {
    try {
      const cities = await City.bulkCreate(data);
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteAirport(id) {
    try {
      await Airport.destroy({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      //this works fine but will not return the updated city object.
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      const airport = await Airport.findByPk(airportId);
      airport.name = data.name;
      await airport.save();
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    //filter can be empty also
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
