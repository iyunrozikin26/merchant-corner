"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notNull: { message: "email required" },
                    notEmpty: { message: "not allowed to empty character" },
                },
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notNull: { message: "username required" },
                    notEmpty: { message: "not allowed to empty character" },
                },
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notNull: { message: "password required" },
                    notEmpty: { message: "not allowed to empty character" },
                    min: 5,
                },
            },
            phoneNumber: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notNull: { message: "phone number required" },
                    notEmpty: { message: "not allowed to empty character" },
                },
            },
            money: {
                allowNull: false,
                type: Sequelize.INTEGER,
                validate: {
                    notNull: { message: "money required" },
                    notEmpty: { message: "not allowed to empty character" },
                },
            },
            role: {
                allowNull: false,
                type: Sequelize.STRING,
                validate: {
                    notNull: { message: "role required" },
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
        await queryInterface.dropTable("Users");
    },
};
