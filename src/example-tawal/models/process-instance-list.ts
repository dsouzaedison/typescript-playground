import {ProcessInstance} from "./process-instance";
import {EntityList} from "../../list/models/core/entity-list";

export class ProcessInstanceList extends EntityList<ProcessInstance> {
    constructor(rawData?: any) {
        super(rawData, ProcessInstance, true);
    }
}
