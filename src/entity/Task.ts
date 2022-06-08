import { randomUUID } from "crypto";

export class Task {
  name: string;
  done: boolean;

  constructor(name: string) {
    this.name = name;
    this.done = false;
  }
}
