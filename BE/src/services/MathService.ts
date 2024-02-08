import { Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Math } from "../entities/Math";

export class MathService {
  private readonly MathRepository: Repository<Math> = AppDataSource.getRepository(Math);

  async find(req: Request, res: Response) {
    try {
      const response = await this.MathRepository.find(req.params);
      return res.status(200).json(response);      
    } catch (err) {
      return res.status(500).json({ error: `Error while finding data: ${err.message}` });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const response = await this.MathRepository.save(req.body);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: `Error while creating data: ${err.message}` });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const response = await this.MathRepository.update(req.params.id, req.body);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: `Error while updating data: ${err.message}` });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const response = await this.MathRepository.delete(req.params.id);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: `Error while deleting data: ${err.message}` });
    }
  }
}

export default new MathService();
