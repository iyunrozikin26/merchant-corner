const Controller = require("../controllers/cart");
const { authentication } = require("../middlewares/auth");

const cartRoute = require("express").Router();

cartRoute.get("/", authentication, Controller.allCartProducts);
cartRoute.get("/:productId", authentication, Controller.readProductCart);
cartRoute.post("/:productId", authentication, Controller.addProductToCart);
cartRoute.delete("/:productId", authentication, Controller.deleteProductCart);

module.exports = cartRoute;
