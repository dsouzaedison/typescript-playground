import {Entity} from "./core/entity";

type TaskDto = any

export class Task extends Entity<TaskDto> {
	constructor(taskDto: TaskDto) {
		super(taskDto, 'id')
	}

	get processName(): string {
		return this.state?.processName;
	}

	get name(): string {
		return this.state?.name;
	}

	get createdAt(): number {
		return this.state?.createdAt;
	}
}
