const Controller = require("../controllers/order");
const { authentication } = require("../middlewares/auth");

const orderRoute = require("express").Router();

orderRoute.get("/", authentication, Controller.allOrderProducts);
orderRoute.post("/a/:productId", authentication, Controller.checkOutProduct);

module.exports = orderRoute;
