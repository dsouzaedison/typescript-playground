import {EntityList} from "./core/entity-list";
import {Process} from "./process";

export class ProcessList extends EntityList<Process> {
    constructor(rawData?: any) {
        super(rawData, Process, true);
    }
}
