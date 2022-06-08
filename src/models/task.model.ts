import mongoose, { model, Schema } from "mongoose";
import { Task } from "../entity/Task";

const taskSchema = new Schema<Task>({
  name: String,
  done: Boolean,
});

export const taskModel = model<Task>("Task", taskSchema);
