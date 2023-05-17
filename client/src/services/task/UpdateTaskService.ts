import { tasks } from "../../db/database";
import { Task } from "../../db/models/Task";

class UpdateTaskService {
    async execute({ id, title, description, finished }: Task) {
        const task = {
            id,
            title,
            description,
            finished
        };

        const index = tasks.findIndex(item => item.id === task.id);
        
        if (index != -1) { // -1 if task was not found
            tasks[index] = task;
            return task;
        }
        
        return index;
    }
}

export { UpdateTaskService };