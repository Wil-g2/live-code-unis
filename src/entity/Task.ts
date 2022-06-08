import { randomUUID } from "crypto";

export class Task {
  id: string;
  name: string;
  done: boolean;

  constructor(name: string) {
    this.id = randomUUID();
    this.name = name;
    this.done = false;
  }
}
