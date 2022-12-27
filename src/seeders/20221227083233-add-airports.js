"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "PALAM AIRPORT",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "INDIRA GANDHI INTERNATIONAL AIRPORT",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "SAFDARJUNT AIRPORT",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kempegowda International Airport Bengaluru",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hubballi Airport",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mangaluru International Airport",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Netaji Subhas Chandra Bose International Airport",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Behala Airport",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
