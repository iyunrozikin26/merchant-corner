"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("Products", "productImg", Sequelize.STRING);
        // await queryInterface.addColumn("Products", "productImg", { type: Sequelize.STRING });
        /**
         * Add altering commands here.
         *
         * Example:
         */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("Products", "productImg", {});
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
