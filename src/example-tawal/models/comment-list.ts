import {Comment} from "./comment";
import {EntityList} from "../../list/models/core/entity-list";

export class CommentList extends EntityList<Comment> {
    constructor(rawData?: any) {
        super(rawData, Comment, true);
    }
}
