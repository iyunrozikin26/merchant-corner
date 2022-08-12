const { User, Product } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) next({ name: "invalidToken", message: "Invalid Token, you have to login first!" });

        let payload = verifyToken(access_token);

        let user = await User.findOne({ where: { email: payload.email } });
        if (!user) next({ name: "invalidToken", message: "Invalid Token, you have to login first!" });
        else {
            req.user = {
                id: user.id,
                email: payload.email,
                role: user.role,
            };
            next();
        }
    } catch (error) {
        next(error);
    }
};

const authorizeAdmin = async (req, res, next) => {
    try {
        console.log(req.user);
        if (req.user.role == "admin") next();
        else next({ name: "adminAccess", message: "not allow to access this action!" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authentication,
    authorizeAdmin,
};
