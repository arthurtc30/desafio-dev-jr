import { Router } from "express";
import { ListTaskController } from "./controllers/task/ListTasksController";
import { CreateTaskController } from "./controllers/task/CreateTaskController";
import { UpdateTaskController } from "./controllers/task/UpdateTaskController";

const router = Router();

// Task routes
router.get("/tasks", new ListTaskController().handle);
router.post("/task/add", new CreateTaskController().handle);
router.patch("/task", new UpdateTaskController().handle);


export { router };