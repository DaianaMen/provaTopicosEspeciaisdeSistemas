import { Request, Response } from "express";
import CarroSchema from "../models/CarroSchema";

class CarroController {
  async listar(request: Request, response: Response) {
    response.status(200).json(await CarroSchema.find({}));
  }


  async cadastrar(request: Request, response: Response) {
    const novoCarro = await CarroSchema.create(request.body);
    response.status(201).json(novoCarro);
  }
}

export { CarroController };
