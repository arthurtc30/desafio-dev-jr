import { tasks } from "../../db/database";

class ToggleTaskService {
    async execute(id: number) {
        const index = tasks.findIndex(item => item.id === id);

        if (index === -1) return index;

        tasks[index].finished = !tasks[index].finished;
        return tasks[index];
    }
}

export { ToggleTaskService };
