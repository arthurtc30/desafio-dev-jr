import { Request, Response } from "express";
import { ToggleTaskService } from "../../services/task/ToggleTaskService";

class ToggleTaskController {
    async handle(req: Request, res: Response) {
        const id = Number.parseInt(req.query.id as string);

        const service = new ToggleTaskService();

        const task = await service.execute(id);

        if (task === -1) {
            return res.json({
                message: `Task not found`
            })
        }

        return res.json({
            message: `Successfully ${task.finished ? "finished" : "closed"} task "${task.title}"`,
            task: {
                ...task
            }
        })
    }
}

export { ToggleTaskController };
