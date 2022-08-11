"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notNull: { message: "name required" },
                    notEmpty: { message: "not allowed to empty character" },
                },
            },
            price: {
                allowNull: false,
                type: Sequelize.INTEGER,
                validate: {
                    notNull: { message: "price required" },
                    notEmpty: { message: "not allowed to empty character" },
                    min: 0,
                },
            },
            stock: {
                allowNull: false,
                type: Sequelize.INTEGER,
                validate: {
                    notNull: { message: "stock required" },
                    notEmpty: { message: "not allowed to empty character" },
                    min: 0,
                },
            },
            description: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notNull: { message: "description required" },
                    notEmpty: { message: "not allowed to empty character" },
                },
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
        await queryInterface.dropTable("Products");
    },
};
