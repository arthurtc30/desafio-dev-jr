import { Request, Response } from "express";
import { UpdateTaskService } from "../../services/task/UpdateTaskService";
import { Task } from "../../db/models/Task";

class UpdateTaskController {
    async handle(req: Request, res: Response) {
        const { id, title, description, finished }: Task = req.body;

        const service = new UpdateTaskService();

        const task = await service.execute({
            id,
            title,
            description,
            finished
        });

        if (task === -1) {
            return res.json({
                message: `Task not found`
            })
        }

        return res.json({
            message: `Successfully updated task "${task.title}"`,
            task: {
                ...task
            }
        })
    }
}

export { UpdateTaskController };