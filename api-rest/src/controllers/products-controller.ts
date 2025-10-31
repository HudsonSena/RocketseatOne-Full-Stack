import { Request, Response } from "express";
import { AppError } from "../utils/app-error";

class ProductsController {
  //máximo 5 métodos
  index(request: Request, response: Response) {
    return response.send("Listagem de produtos");
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body;
    if (!name) throw new AppError("Nome é obrigatório");
    if (name.trim().length === 0) throw new AppError("Nome não pode ser vazio");
    if (!price) throw new AppError("Preço é obrigatório");
    if (price < 0) throw new AppError("Preço não pode ser negativo");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
