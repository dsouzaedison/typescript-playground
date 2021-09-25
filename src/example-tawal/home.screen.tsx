import {useEffect, useState} from "react";
import {services} from "./services";
// @ts-ignore
import {RequestList, RequestCard} from "./models/request-list";

export const HomeScreen = () => {
    const [requestList, setRequestList] = useState(new RequestList())
    const {requestsService} = services

    useEffect(() => {
        const loadData = async () => {
            const response = await requestsService.getRequests()

            if (response.hasData()) {
                setRequestList(response.getData())
            }
        }

        loadData()
    })

    return (
        <>
            {
                requestList.map(
                    (request) => <RequestCard request={request} />
                )
            }
        </>
    )
}
