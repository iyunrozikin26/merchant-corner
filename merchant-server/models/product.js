"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Product.hasMany(models.Order, { foreignKey: "productId" });
            Product.belongsTo(models.Category, { foreignKey: "categoryId" });
        }
    }
    Product.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "name is require" },
                },
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "price is require" },
                    min: 0,
                },
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "stock is require" },
                    min: 0,
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "description is require" },
                },
            },
            productImg: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "productImg is require" },
                },
            },
            size: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "size is require" },
                },
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "color is require" },
                },
            },
            categoryId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: { message: "not allowed empty character" },
                    notNull: { message: "productImg is require" },
                },
                references: {
                    model: "Categories",
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
