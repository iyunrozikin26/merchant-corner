const { Cart, Product } = require("../models");

class Controller {
    static async allCartProducts(req, res, next) {
        const userId = req.user.id;
        try {
            let response;
            let option = {
                where: { userId },
                include: [
                    {
                        model: Product,
                        attributes: { exclude: ["createdAt", "updatedAt"] },
                        include: ["Category"],
                    },
                ],
                attributes: { exclude: ["createdAt", "updatedAt"] },
            };
            const yourCartList = await Cart.findAll(option);

            if (yourCartList.length == 0) {
                response = `you don't have items in cart`;
            } else {
                response = yourCartList;
            }
            res.status(200).json({ status: true, data: response });
        } catch (error) {
            next();
        }
    }

    static async readProductCart(req, res, next) {
        const { productId } = req.params;
        try {
            const selectedCartItem = await Cart.findOne({
                where: { productId: req.params.productId },
            });
            if (selectedCartItem) next({ name: "notFoundProduct", message: "Product is Nothing Found" });
            res.status(200).json({ status: true, data: selectedCartItem });
        } catch (error) {
            next(error);
        }
    }

    static async addProductToCart(req, res, next) {
        const { productId } = req.params;
        const userId = req.user.id;
        try {
            const findProduct = await Product.findByPk(productId);
            if (!findProduct) next({ name: "notFoundProduct", message: "Product is Nothing Found" });

            const addCart = {
                userId,
                productId: +productId,
                amount: +req.body.amount,
                orderStatus: "pending",
            };

            const cartProduct = await Cart.create(addCart);
            res.status(201).json({ status: "success add product to cart", data: cartProduct });
        } catch (error) {
            next(error);
        }
    }

    static async deleteProductCart(req, res, next) {
        const { productId } = req.params;
        try {
            const deleteCartItem = await Cart.destroy({
                where: { productId },
            });
            if (!deleteCartItem) {
                next({ name: "notFoundProduct", message: "Product is Nothing Found" });
            } else {
                res.status(200).json({ status: `success to delete product with id ${productId} Cart` });
            }
        } catch (error) {
            next();
        }
    }
}

module.exports = Controller;
