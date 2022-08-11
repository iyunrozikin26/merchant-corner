"use strict";

const { hashingPassword } = require("../helpers/bcrypt");

module.exports = {
    async up(queryInterface, Sequelize) {
        const admin = {
            email: "admin99@gmail.co.id",
            username: "admin99",
            password: hashingPassword("admin!123"),
            phoneNumber: "021123321123",
            money: 9999999,
            role: "admin",
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await queryInterface.bulkInsert("Users", [admin]);
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
    },
};
