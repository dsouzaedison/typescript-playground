import {EntityList} from "../../list/models/core/entity-list";
import {Request} from "./request";

export class RequestList extends EntityList<Request> {
    constructor(rawData?: any) {
        super(rawData, Request, true);
    }
}
