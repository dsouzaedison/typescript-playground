export abstract class ApiService {
    storeType: string

    constructor(storeType: string) {
        this.storeType = storeType
    }

    protected getResources(): Record<string, string> {
        return {
            task: '/task/',
            user: '/user/'
        }
    }

    protected parseError(error) {
        return {error}
    }

    protected get(url: string, data?: any): Promise<any> {}
    protected post(url: string, data?: any): Promise<any> {}
    protected patch(url: string, data?: any): Promise<any> {}
    protected delete(url: string, data?: any): Promise<any> {}
}
