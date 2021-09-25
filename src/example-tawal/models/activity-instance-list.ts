import {ProcessDefinition} from "./process-definition";
import {ActivityInstance} from "./activity-instance";
import {EntityList} from "../../list/models/core/entity-list";

export class ActivityInstanceList extends EntityList<ActivityInstance> {
    constructor(rawData?: any) {
        super(rawData, ActivityInstance, true);
    }
}
