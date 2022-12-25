const { City } = require("../models");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      return { error };
    }
  }

  async deleteCity(id) {
    try {
      await City.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      return { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      return { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      return { error };
    }
  }
}

module.exports = CityRepository;
