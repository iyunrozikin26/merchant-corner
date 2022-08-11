const Controller = require("../controllers/product");

const productRoute = require("express").Router();

productRoute.post("/", Controller.createNewProduct);
productRoute.get("/", Controller.readProducts);
productRoute.get("/:productId", Controller.selectedProduct);
productRoute.put("/:productId/edit", Controller.updateProduct);
productRoute.delete("/:productId/delete", Controller.deleteProduct);

module.exports = productRoute;
