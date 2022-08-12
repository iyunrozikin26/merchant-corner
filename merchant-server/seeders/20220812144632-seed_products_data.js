"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        const products = require("../db/products.json").map((product) => {
            product.createdAt = new Date();
            product.updatedAt = new Date();
            return product;
        });
        await queryInterface.bulkInsert("Products", products);
        /**
         * Add seed commands here.
         *
         * Example:
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Products", null);

        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
