import { Model } from "mongoose";
import { Task } from "../entity/Task";
import { taskModel } from "../models/task.model";

export class TaskService {
  task: Task[];
  constructor(private readonly repository: Model<Task>) {
    this.task = [];
  }
  public async list() {
    return this.repository.find({});
  }

  public async listById(id: string) {
    return this.repository.findById(id);
  }

  public async create(name: string): Promise<Task> {
    const task = new Task(name);
    await this.repository.create(task);
    return task;
  }

  public async update(id: string, name: string, done: boolean) {
    const newTask = await this.repository.findOneAndUpdate(
      { _id: id },
      { name, done },
      { new: true }
    );

    return newTask;
  }

  public async remove(id: string) {
    await this.repository.deleteOne({ _id: id });
  }
}
