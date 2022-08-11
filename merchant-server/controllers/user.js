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
}

module.exports = Controller;
