import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/products-controller";

const productsController = new ProductsController();

const productRoutes = Router();

productRoutes.get("/", productsController.index);

//Middleware local
productRoutes.post("/", myMiddleware, productsController.create);

export { productRoutes };
