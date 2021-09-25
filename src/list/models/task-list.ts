import {Task} from "./task";
import {EntityList} from "./core/entity-list";
import {ProcessList} from "./process-list";

export class TaskList extends EntityList<Task> {
    constructor(rawData?: any) {
        super(rawData, Task);
    }

    getProcesses(): ProcessList {
        // this.sortBy('createdAt')
        const group = this.groupBy('processName')
        return new ProcessList(group)
    }
}
