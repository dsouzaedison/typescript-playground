import {ApiService} from "../api.service";
import {ServiceResponse} from "../service.response";
import {RequestList} from "../../models/request-list";
import {ProcessDefinitionList} from "../../models/process-definition-list";
import {ProcessInstanceList} from "../../models/process-instance-list";
import {ActivityInstanceList} from "../../models/activity-instance-list";
import {Request} from "../../models/request";
import {CommentList} from "../../models/comment-list";

export class RequestsService extends ApiService {
    constructor() {
        super('tasksStore');
    }

    async getProcessDefinitions(): Promise<ServiceResponse<ProcessDefinitionList>> {
        try {
            const response = await this.get('process-definition')
            const processDefinitionList = new ProcessDefinitionList(response.data)

            return new ServiceResponse<ProcessDefinitionList>({
                data: processDefinitionList
            })
        } catch (error) {
            return new ServiceResponse<ProcessDefinitionList>(this.parseError(error))
        }
    }

    async getProcessInstances(): Promise<ServiceResponse<ProcessInstanceList>> {
        try {
            const response = await this.get('process-instance')
            const processInstanceList = new ProcessInstanceList(response.data)

            return new ServiceResponse<ProcessInstanceList>({
                data: processInstanceList
            })
        } catch (error) {
            return new ServiceResponse<ProcessInstanceList>(this.parseError(error))
        }
    }

    async getComments(taskId: string): Promise<ServiceResponse<CommentList>> {
        try {
            const response = await this.get('comments', {taskId})
            const commentList = new CommentList(response.data)

            return new ServiceResponse<CommentList>({
                data: commentList
            })
        } catch (error) {
            return new ServiceResponse<CommentList>(this.parseError(error))
        }
    }

    async getActivityInstances(processInstanceId: string): Promise<ServiceResponse<ActivityInstanceList>> {
        try {
            const response = await this.get('activity-instances', {processInstanceId})
            const processInstanceList = new ActivityInstanceList(response.data)

            return new ServiceResponse<ActivityInstanceList>({
                data: processInstanceList
            })
        } catch (error) {
            return new ServiceResponse<ActivityInstanceList>(this.parseError(error))
        }
    }

    async getRequests(): Promise<ServiceResponse<RequestList>> {
        try {
            const requestList = new RequestList()
            const processDefinitionRes = await this.getProcessDefinitions()
            const processInstanceRes = await this.getProcessInstances()

            if (processDefinitionRes.hasData() && processInstanceRes.hasData()) {
                const processDefinitionList = processDefinitionRes.getData()
                const processInstanceList = processInstanceRes.getData()

                processInstanceList.map(async (processInstance) => {
                    const processDefinition = processDefinitionList.getItemById(processInstance.processDefinitionId)

                    if (processDefinition) {
                        const activityInstanceRes = await this.getActivityInstances(processInstance.id)

                        if (activityInstanceRes.hasData()) {
                            const activityInstanceList = activityInstanceRes.getData()

                            activityInstanceList.map(async (activityInstance) => {
                                const commentListRes = await this.getComments(activityInstance.taskId)

                                if (commentListRes.hasData()) {
                                    const commentList = commentListRes.getData()
                                    const request = new Request({
                                        processDefinition,
                                        processInstance,
                                        commentList,
                                    })

                                    requestList.addItem(request)
                                }
                            })
                        }
                    }
                })
            }

            return new ServiceResponse<RequestList>({data: requestList})
        } catch (error) {
            return new ServiceResponse<RequestList>(this.parseError(error))
        }
    }
}
