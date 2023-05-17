import { Request, Response } from "express";
import { CreateTaskService } from "../../services/task/CreateTaskService";
import { Task } from "../../db/models/Task";

class CreateTaskController {
    async handle(req: Request, res: Response) {
        const { title, description, finished }: Task = req.body;

        const service = new CreateTaskService();

        const task = await service.execute({
            title,
            description,
            finished: finished || false
        });

        return res.json({
            message: `Task "${task.title}" created successfully`,
            task: {
                ...task
            }
        })
    }
}

export { CreateTaskController };