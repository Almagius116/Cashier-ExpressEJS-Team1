"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Reviews", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Customers", // table name
                    key: "id",
                },
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Products", // table name
                    key: "id",
                },
            },
            rating: {
                type: Sequelize.INTEGER,
            },
            comment: {
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Reviews");
    },
};
