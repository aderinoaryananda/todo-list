import { Request, Response } from "express";
import TodoListService from "../services/TodoListService";


class TodoListController {
  find(req: Request, res: Response) {
    TodoListService.find(req, res);
  }


  findOne(req: Request, res: Response) {
    TodoListService.find(req, res);
  }

  create(req: Request, res: Response) {
    TodoListService.create(req, res);
  }


  delete(req: Request, res: Response) {
    TodoListService.delete(req, res);
  }

  update(req: Request, res: Response) {
    TodoListService.update(req, res);
  }
}

export default new TodoListController();
