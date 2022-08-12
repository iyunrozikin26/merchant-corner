const router = require("express").Router();

const cartRoute = require("./cart");
const orderRoute = require("./order");
const productRoute = require("./product");
const userRoute = require("./user");

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use('/carts', cartRoute)
router.use("/orders", orderRoute);


module.exports = router;
