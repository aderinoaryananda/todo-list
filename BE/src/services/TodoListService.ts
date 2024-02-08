import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { TodoList } from "../entities/todolist";
import { Request, Response } from "express";


export class TodoListService {
    private readonly TodoListRepository: Repository<TodoList> = AppDataSource.getRepository(TodoList);

    async find(req: Request, res: Response) {
        try {
            const response = await this.TodoListRepository.find(req.params);
            return res.status(200).json(response)
        } catch {
            return res.status(500).json({ error: "Error dibagian async find TodoListService"})
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const response = await this.TodoListRepository.findOne({ where: { id } });
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ error: "Error in async findOne TodoListService" });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const response = await this.TodoListRepository.create(req.body);
            return res.status(200).json(response)
        } catch {
            return res.status(500).json({ error: "Error dibagian async create TodoListService"})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const response = await this.TodoListRepository.update(req.params.id, req.body);
            return res.status(200).json(response)
        } catch {
            return res.status(500).json({ error: "Error dibagian async update TodoListService"})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const response = await this.TodoListRepository.delete(req.params.id);
            return res.status(200).json(response)
        } catch {
            return res.status(500).json({error: "Error dibagian async delete TodoListService"})
        }
    }
}

export default new TodoListService();