"use strict";
const { Model } = require("sequelize");
const { hashingPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Order, { foreignKey: "userId" });
        }
    }
    User.init(
        {
            email: {
                allowNull: false,
                type: DataTypes.STRING,
                unique: { message: "email already exist" },
                validate: {
                    notNull: { message: "email is require" },
                    notEmpty: { message: "not allowed empty character" },
                    isEmail: true,
                },
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: { message: "username is require" },
                    notEmpty: { message: "not allowed empty character" },
                },
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: { message: "password is require" },
                    notEmpty: { message: "not allowed empty character" },
                    min: 5,
                    len: [5, 16],
                },
            },
            phoneNumber: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: { message: "phone number is require" },
                    notEmpty: { message: "not allowed empty character" },
                    len: [11, 16],
                },
            },
            money: {
                allowNull: false,
                type: DataTypes.INTEGER,
                validate: {
                    notNull: { message: "money is require" },
                    notEmpty: { message: "not allowed empty character" },
                    min: 0,
                },
            },
            role: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: { message: "role is require" },
                    notEmpty: { message: "not allowed empty character" },
                },
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    User.addHook("beforeCreate", (user) => {
        user.password = hashingPassword(user.password);
        
    });
    return User;
};
