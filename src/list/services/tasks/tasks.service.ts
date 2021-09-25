import {ApiService} from "../api.service";
import {Task} from "../../models/task";
import {ServiceResponse} from "../service.response";
import {TaskList} from "../../models/task-list";

export class TasksService extends ApiService {
    constructor() {
        super('tasksStore');
    }

    async getTasks(): Promise<ServiceResponse<TaskList>> {
        try {
            const resource = this.getResources().task
            const response = await this.get(`${resource}`)
            const taskList = new TaskList(response.data) // Array<Task>

            return new ServiceResponse<TaskList>({data: taskList})
        } catch (error) {
            return new ServiceResponse<TaskList>(this.parseError(error))
        }
    }

    async getTask(taskId: string): Promise<ServiceResponse<Task>> {
        try {
            const resource = this.getResources().task
            const response = await this.get(`${resource}${taskId}`)
            const task = new Task(response.data)

            return new ServiceResponse<Task>({data: task})
        } catch (error) {
            return new ServiceResponse<Task>(this.parseError(error))
        }
    }
}
