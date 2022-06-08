import { Task } from "../entity/Task";

export class TaskService {
  task: Task[];
  constructor() {
    this.task = [];
  }
  public list() {
    return this.task;
  }

  public listById(id: string) {
    return this.task.find((task) => task.id === id);
  }

  public create(name: string): Task {
    const task = new Task(name);
    this.task.push(task);
    return task;
  }

  public update(id: string, name: string, done: boolean) {
    const task = this.task.find((item) => item.id === id);
    if (task) {
      task.name = name;
      task.done = done;
    }
    return task;
  }

  public remove(id: string): void {
    const task = this.task.findIndex((task) => task.id === id);
    this.task.splice(task, 1);
  }
}
