import {Request} from "./models/request";
import {ActivityInstanceList} from "./models/activity-instance-list";
import {CommentList} from "./models/comment-list";
import {ProcessDefinitionList} from "./models/process-definition-list";
import {ProcessInstanceList} from "./models/process-instance-list";



const processDefinitionList: ProcessDefinitionList = Api.get()
const processInstanceList: ProcessInstanceList = Api.get()

processInstanceList.map((processInstance) => {
    const activityInstanceList: ActivityInstanceList = Api.get(processInstance.id) // 3rd API
    const processDefinition = processDefinitionList.getItemById(processInstance.processDefinitionId)

    activityInstanceList.map((activityInstance) => {
        const commentList: CommentList = Api.get(activityInstance.taskId)

        new Request({
            processDefinition,
            processInstance,
            commentList,
        })
    })

})
