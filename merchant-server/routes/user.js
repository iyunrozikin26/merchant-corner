const Controller = require("../controllers/user");

const userRoute = require("express").Router();
const { authentication, authorizeAdmin } = require("../middlewares/auth");

userRoute.post("/register", Controller.register);
userRoute.post("/login", Controller.login);
userRoute.get("/all", authentication, authorizeAdmin, Controller.allUsers);
userRoute.get("/", authentication, Controller.selectedUser);
userRoute.put("/edit", authentication, Controller.updateUser);
userRoute.delete("/:userId/delete", authentication, authorizeAdmin, Controller.deleteUser);

module.exports = userRoute;
