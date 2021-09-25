class Requests {
    async getRequestsForDashboard() {
        const requestsList: Array<RequestsModel> = [];
        // 1st API
        const processDefinitions = await processDefinitionApi.get();
        // 2nd API
        const processInstances = await processInstanceApi.get();

        await Promise.all(
            _.map(
                processInstances.data,
                async (processInstance) => {
                    // getting the single object from process definition list to fetch the description for request card
                    const processDefinition: ProcessDefinitionDto = _.find(
                        processDefinitions.data,
                        { id: processInstance.processDefinitionId },
                    );

                    // 3rd API
                    const activityInstanceData = await activityInstanceApi.get(processInstance.id);

                    await Promise.all(
                        _.map(
                            activityInstanceData.data,
                            async (activityInstance) => {
                                // 4th API
                                const comments = await commentsApi.get(activityInstance.taskId);

                                requestsList.push(new RequestsModel(
                                    processInstance.id,
                                    processInstance.processDefinitionName,
                                    processDefinition.description,
                                    comments.data.length > 0,
                                    processInstance.startTime,
                                    processInstance.state,
                                ));
                            }));

                }));

        const sortedRequestList = _.orderBy(requestsList, (o: any) => dayjs(o.date.replace('+0300', ''), 'YYYY-MM-DDTHH:mm:ss'), ['desc']);
        return sortedRequestList;
    }
}
