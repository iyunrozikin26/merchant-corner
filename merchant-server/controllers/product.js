const { Product, Category } = require("../models");
const { Op } = require("sequelize");

class Controller {
    static async createNewProduct(req, res, next) {
        const { name, price, stock, description, productImg, categoryId, size, color } = req.body;
        try {
            if (!productImg) next({ name: "imageProduct", message: "input image product, please!" });

            const addProduct = await Product.create({
                name,
                price: +price,
                stock: +stock,
                description,
                productImg,
                categoryId,
                size,
                color,
            });

            res.status(201).json({
                status: "success to add new product",
                data: addProduct,
            });
        } catch (error) {
            next(error);
        }
    }

    static async readProducts(req, res, next) {
        try {
            let option = {
                where: {
                    stock: { [Op.gt]: 0 },
                },
                include: ["Category"],
                attributes: { exclude: ["createdAt", "updatedAt"] },
                order: [["createdAt", "DESC"]],
            };
            const allProducts = await Product.findAll(option);

            res.status(200).json({ status: "success to get all products", data: allProducts });
        } catch (error) {
            next(error);
        }
    }

    static async selectedProduct(req, res, next) {
        const { productId } = req.params;
        try {
            const selected = await Product.findOne({
                where: { id: productId },
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include: ["Category"],
            });
            if (selected) {
                res.status(200).json({
                    status: "selected product",
                    data: selected,
                });
            } else {
                next({ name: "notFoundProduct", message: "Product is Nothing Found" });
            }
        } catch (error) {
            next(error);
        }
    }

    static async updateProduct(req, res, next) {
        const { productId } = req.params;
        const { name, price, stock, description, productImg, size, color } = req.body;
        try {
            const selected = await Product.findByPk(productId);
            if (!selected) {
                next({ name: "notFoundProduct", message: "Product is Nothing Found" });
            } else {
                const updated = await Product.update(
                    {
                        name,
                        price,
                        stock,
                        description,
                        productImg,
                        size,
                        color,
                    },
                    { where: { id: productId }, returning: true }
                );
                res.status(200).json({ status: "success to update product", data: updated[1] });
            }
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res, next) {
        const { productId } = req.params;
        try {
            const deleted = await Product.destroy({ where: { id: productId } });
            if (!deleted) {
                next({ name: "notFoundProduct", message: "Product is Nothing Found" });
            } else {
                res.status(200).json({ status: `success to delete product with id ${productId}` });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
