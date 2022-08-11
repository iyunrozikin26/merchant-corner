const Controller = require("../controllers/user");

const userRoute = require("express").Router();

userRoute.post("/register", Controller.register);
userRoute.post("/login", Controller.login);

module.exports = userRoute;
