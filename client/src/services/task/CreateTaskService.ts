import { tasks } from "../../db/database";
import { Task } from "../../db/models/Task";

interface TaskRequest {
    title: string,
    description: string,
    finished?: boolean,
}

class CreateTaskService {
    async execute({ title, description, finished }: TaskRequest) {
        const task: Task = {
            id: tasks.length,
            title,
            description,
            finished,
        };

        tasks.push(task);

        return task;
    }
}

export { CreateTaskService };