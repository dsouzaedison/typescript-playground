import {ProcessDefinition} from "./process-definition";
import {EntityList} from "../../list/models/core/entity-list";

export class ProcessDefinitionList extends EntityList<ProcessDefinition> {
    constructor(rawData?: any) {
        super(rawData, ProcessDefinition, true);
    }
}
