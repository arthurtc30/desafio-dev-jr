import { tasks } from "../../db/database";

class DeleteTaskService {
    async execute(id: number) {
        const index = tasks.findIndex(item => item.id === id);

        if (index === -1) return index;

        const task = tasks[index];
        tasks.splice(index, 1);
        return task;
    }
}

export { DeleteTaskService };