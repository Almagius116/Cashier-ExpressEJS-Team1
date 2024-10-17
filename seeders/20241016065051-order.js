"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          customer_id: 1,
          product_id: 1,
          quantity: 2,
          total_price: 30000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 2,
          product_id: 2,
          quantity: 1,
          total_price: 20000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          customer_id: 2,
          product_id: 2,
          quantity: 3,
          total_price: 55000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
