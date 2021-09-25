// @ts-ignore
import {Text} from 'example'
import {ProcessList} from "./models/process-list";
// @ts-ignore
import {Task} from 'task.component';

type Store = {processStore: {processList: ProcessList}}

export const HomeScreen = () => {
    // @ts-ignore
    const {processStore: {processList}}: Store = useStores();

    return (
        <>
            {
                processList.map((process) => (
                    <>
                        <Text>{process.name}</Text>
                        {
                            process.taskList.map((task) => <Task task={task} />)
                        }
                    </>
                ))
            }
        </>
    )
}
