const { Product, Order, Category, User, sequelize } = require("../models");

class Controller {
    static async allOrderProducts(req, res, next) {
        const userId = req.user.id;
        try {
            let response;
            let option = {
                where: { userId },
                include: [
                    {
                        model: Product,
                        attributes: { exclude: ["createdAt", "updatedAt"] },
                        include: [
                            {
                                model: Category,
                                attributes: { exclude: ["createdAt", "updatedAt"] },
                            },
                        ],
                    },
                ],
                attributes: { exclude: ["createdAt", "updatedAt"] },
            };
            const yourOrderList = await Order.findAll(option);

            if (yourOrderList.length == 0) {
                response = `you don't have items in Order`;
            } else {
                response = yourOrderList;
            }
            res.status(200).json({ status: true, data: response });
        } catch (error) {
            next(error);
        }
    }

    static async checkOutProduct(req, res, next) {
        const t = await sequelize.transaction();
        const { productId } = req.params;
        const userId = req.user.id;
        const { amount } = req.body;

        try {
            const user = await User.findByPk(userId, {
                attributes: { exclude: ["password", "role", "createdAt", "updatedAt"] },
            });

            const product = await Product.findByPk(productId, {
                attributes: { exclude: ["createdAt", "updatedAt"] },
            });

            if (!product) next({ name: "notFoundProduct", message: "Product is Nothing Found" });

            const totalCost = Number(amount) * Number(product.price);

            console.log(amount);
            console.log(user.money);
            console.log(totalCost);

            if (Number(user.money) < totalCost) throw { name: "notEnoughMoney", message: "order failed. your money is not enough!" };
            if (Number(product.stock) < Number(amount)) throw { name: "notEnoughStock", message: "order failed. product stock is not enough!" };

            const currentMoney = Number(user.money) - totalCost;
            const currentStock = Number(product.stock) - amount;

            const addOrder = {
                userId,
                productId,
                amount,
                orderStatus: "ordered",
            };

            // Transaction proses
            await Order.create(addOrder, { transaction: t });

            await User.update(
                { money: currentMoney },
                {
                    where: {
                        id: userId,
                    },
                    returning: true,
                },
                { transaction: t }
            );

            await Product.update(
                { stock: currentStock },
                {
                    where: { id: productId },
                    returning: true,
                },
                { transaction: t }
            );

            const ordered = await Order.findOne({
                where: { userId },
                include: ["Product"],
            });

            await t.commit();
            res.status(200).json({ status: `product with id ${productId} succcess to order`, data: ordered });
        } catch (error) {
            await t.rollback();
            next(error);
        }
    }
}

module.exports = Controller;
