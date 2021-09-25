import {EntityId} from "./entity-list";

export abstract class LocalEntity<T extends Record<string, any>> {
    _id!: EntityId
    protected readonly state: T

    protected constructor(state: T) {
        this.state = state
    }

    get id() { return this._id }
}
