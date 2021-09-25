import {ActivityInstanceList} from "./activity-instance-list";

export class ProcessInstance {
    id: string;
    processDefinitionId: string;
    processDefinitionName: string;
    processDefinitionStartTime: Date;
    state: string;
    activityInstanceList: ActivityInstanceList;
}
