import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { TaskService } from "../services/task.service";
import { taskModel } from "../models/task.model";

const router = Router();

const taskController = new TaskController(new TaskService(taskModel));

router.get("/tasks", (req, res) => taskController.listTask(req, res));
router.get("/tasks/:id", (req, res) => taskController.listTaskById(req, res));
router.post("/tasks", (req, res) => taskController.createTask(req, res));
router.patch("/tasks/:id", (req, res) => taskController.update(req, res));
router.delete("/tasks/:id", (req, res) => taskController.remove(req, res));

export default router;
