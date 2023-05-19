import { Request, Response } from "express";
import { FindTaskService } from "../../services/task/FindTaskService";

class FindTaskController {
    async handle(req: Request, res: Response) {
        const id = Number.parseInt(req.params.id as string);
        const service = new FindTaskService();

        const task = await service.execute(id);

        if (!task) {
            return res.json({
                message: `Could not find task`,
            });
        }

        return res.json({
            message: `Found task: "${task.title}"`,
            task
        });
    }
}

export { FindTaskController };