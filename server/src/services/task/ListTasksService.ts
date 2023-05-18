import { tasks } from "../../db/database";

class ListTasksService {
    async execute() {
        return tasks;
    }
}

export { ListTasksService };