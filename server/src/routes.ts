import { Router } from "express";
import { ListTaskController } from "./controllers/task/ListTasksController";
import { CreateTaskController } from "./controllers/task/CreateTaskController";
import { UpdateTaskController } from "./controllers/task/UpdateTaskController";
import { DeleteTaskController } from "./controllers/task/DeleteTaskController";
import { ToggleTaskController } from "./controllers/task/ToggleTaskController";

const router = Router();

// Task routes
router.get("/tasks", new ListTaskController().handle);
router.post("/tasks", new CreateTaskController().handle);
router.patch("/tasks", new UpdateTaskController().handle);
router.delete("/tasks", new DeleteTaskController().handle);
router.put("/tasks", new ToggleTaskController().handle);

export { router };