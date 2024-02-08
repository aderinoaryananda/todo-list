import { Request, Response } from "express";
import MathService from "../services/MathService";

class MathController {
  find(req: Request, res: Response) {
    MathService.find(req, res);
  }

  create(req: Request, res: Response) {
    MathService.create(req, res);
  }


  delete(req: Request, res: Response) {
    MathService.delete(req, res);
  }

  update(req: Request, res: Response) {
    MathService.update(req, res);
  }
}

export default new MathController();
