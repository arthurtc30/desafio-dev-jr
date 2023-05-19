import { tasks } from "../../db/database";

class FindTaskService {
    async execute(id: number) {
        return tasks.find(item => item.id === id) || null;
    }
}

export { FindTaskService };