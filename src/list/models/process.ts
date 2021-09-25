import {TaskList} from "./task-list";
import {LocalEntity} from "./core/local-entity";

export class Process extends LocalEntity<TaskList>{
    private readonly _name: string;

    constructor(taskList: TaskList) {
        super(taskList)
        this._name = taskList.first()?.processName ?? ''
    }

    get taskList() {
        return this.state
    }

    get name() {
        return this._name
    }
}
