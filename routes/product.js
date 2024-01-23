import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();



//GET: /products => get all products
productRouter.get('/', productController.getAllProducts)

//GET: /products/:id => get product by id
productRouter.get('/:id', productController.getProductByObjectId)

//POST: /products => create a new product
productRouter.post('/', productController.createProduct)

export default productRouter;
