const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class Controller {
    static async register(req, res, next) {
        let { email, username, password, phoneNumber } = req.body;
        try {
            const newUser = {
                email,
                username,
                password,
                phoneNumber,
                money: 0,
                role: "customer",
            };

            const registeredUser = await User.create(newUser);

            res.status(201).json({
                status: "success to register",
                data: {
                    id: registeredUser.id,
                    email: registeredUser.email,
                    role: registeredUser.role,
                },
            });
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                next({ name: "InvalidLogin", message: "wrong email / password" });
            } else {
                if (comparePassword(password, user.password)) {
                    const access_token = signToken({ email });

                    res.status(200).json({
                        status: "success to login",
                        access_token,
                        email: user.email,
                        role: user.role,
                    });
                } else {
                    next({ name: "InvalidLogin", message: "wrong email / password" });
                }
            }
        } catch (error) {
            next(error);
        }
    }

    static async selectedUser(req, res, next) {
        const userId = req.user.id;
        try {
            const user = await User.findByPk(userId);
            res.status(200).json({ status: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    static async allUsers(req, res, next) {
        try {
            let option = {
                // include: ["Order"],
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
                order: [["createdAt", "DESC"]],
            };
            const users = await User.findAll(option);
            res.status(200).json({ status: true, data: users });
        } catch (error) {
            next(error);
        }
    }

    static async updateUser(req, res, next) {
        const userId = req.user.id;
        try {
            const updated = await User.update(req.body, { where: { id: userId }, returning: true });
            res.status(200).json({ status: `user with id ${userId} updated`, data: updated[1][0] });
        } catch (error) {
            next(error);
        }
    }

    static async deleteUser(req, res, next) {
        const { userId } = req.params;

        try {
            const deleted = await User.destroy({ where: { id: userId } });
            if (!deleted) next({ name: "notFoundUser", message: "user is nothing found" });
            res.status(200).json({ status: `user with id ${userId} success to delete` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
