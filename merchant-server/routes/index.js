const router = require("express").Router();

const orderRoute = require("./order");
const productRoute = require("./product");
const userRoute = require("./user");

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/orders", orderRoute);

module.exports = router;
