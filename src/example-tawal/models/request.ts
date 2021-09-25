import {ProcessDefinition} from "./process-definition";
import {ProcessInstance} from "./process-instance";
import {CommentList} from "./comment-list";
import {LocalEntity} from "../../list/models/core/local-entity";

interface RequestDto {
    processDefinition: ProcessDefinition,
    processInstance: ProcessInstance,
    commentList: CommentList,
}

enum RequestState {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
}

export class Request extends LocalEntity<RequestDto> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state: RequestDto) {
        super(state);
    }

    getName(): string {
        return this.state.processInstance.processDefinitionName as string
    }

    getDescription(): string {
        return this.state.processDefinition.description as string
    }

    isActive(): boolean {
        return this.state.processInstance.state === RequestState.Active
    }

    getStartTime(): Date {
        return this.state.processInstance.processDefinitionStartTime as Date;
    }

    hasComments(): boolean {
        return !!this.state.commentList.size
    }
}
