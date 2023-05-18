import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/task/DeleteTaskService";

class DeleteTaskController {
    async handle(req: Request, res: Response) {
        const id = Number.parseInt(req.query.id as string);

        const service = new DeleteTaskService();

        const task = await service.execute(id);

        if (task === -1) {
            return res.json({
                message: "Could not find task to delete"
            });
        }

        return res.json({
            message: `Successfully deleted task "${task.title}"`
        });
    }
}

export { DeleteTaskController };