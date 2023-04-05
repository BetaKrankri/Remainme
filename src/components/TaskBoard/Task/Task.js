import { useContext } from "react";
import { DataContext } from "../../../DataContext";
import CheckBox from "./Checkbox/CheckBox";

function Task({ task }) {
    const { setTasks } = useContext(DataContext);

    function handleCheckboxChange(attributeName) {
        setTasks(prevTasks => prevTasks.map(pTask => {
            if (pTask.creationDate === task.creationDate) {
                return {
                    ...pTask,
                    [attributeName]: !pTask[attributeName]
                };
            } else {
                return pTask;
            }
        }))
    }

    return (
        <div className='Task'>
            <CheckBox isChecked={task.isDone}
                name='isDone'
                onChange={handleCheckboxChange} />
            <div className='Info'>
                <div className='Title'>{task.title}</div>
                {/* <div className='Extra'></div> */}
            </div>
            <CheckBox isChecked={task.isStarred}
                name='isStarred'
                onChange={handleCheckboxChange} />
        </div>
    );
}

export default Task;