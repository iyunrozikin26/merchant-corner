const { User } = require("../models");

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
            console.log(registeredUser);
            res.status(201).json({
                status: "success to register",
                data: {
                    id: registeredUser.id,
                    email: registeredUser.email,
                    role: registeredUser.role,
                },
            });
        } catch (error) {
            console.log(error);
            res.send(error.errors[0]);
        }
    }
    static async login(req, res, next) {}
}

module.exports = Controller;
