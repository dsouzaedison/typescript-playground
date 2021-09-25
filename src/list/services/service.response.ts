export class ServiceResponse<T> {
    data: T;

    constructor({response, error, data}: {response?: any, error?: any, data?: T}) {}

    hasData(): boolean {
        return !!this.data
    }

    getData(): T {
        return this.data
    }

    hasError(): boolean {}

    getErrorMessage(): string {}
}
