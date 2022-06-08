import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

export class TaskController {
  constructor(private readonly service: TaskService) {}

  public async listTask(req: Request, res: Response) {
    const tasks = await this.service.list();
    return res.json(tasks);
  }

  public async listTaskById(req: Request, res: Response) {
    const { id } = req.params;
    const task = await this.service.listById(id);
    return res.json(task);
  }

  public async createTask(req: Request, res: Response) {
    const { name } = req.body;
    const task = await this.service.create(name);
    return res.status(201).json(task);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, done } = req.body;
    const task = await this.service.update(id, name, done);
    return res.status(200).json(task);
  }

  public async remove(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.remove(id);
    return res.status(204).send();
  }
}
