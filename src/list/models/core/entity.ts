import {EntityId} from "./entity-list";

export abstract class Entity<T extends Record<string, any>> {
    private readonly _id: EntityId
    protected readonly state: T

    protected constructor(state: T, keyId: string) {
        this._id = state[keyId] as EntityId
        this.state = state
    }

    get id() { return this._id }
}
