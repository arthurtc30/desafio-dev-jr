import { Request, Response } from "express";
import { ListTasksService } from "../../services/task/ListTasksService";

class ListTaskController {
    async handle(req: Request, res: Response) {
        const service = new ListTasksService();

        const tasks = await service.execute();

        return res.json({
            message: `Found ${tasks.length} tasks`,
            tasks: [
                ...tasks
            ]
        })
    }
}

export { ListTaskController };