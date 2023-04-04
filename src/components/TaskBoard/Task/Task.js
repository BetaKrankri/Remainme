import { useContext } from "react";
import { DataContext } from "../../../DataContext";

function Task({ task }) {
    const { setTasks } = useContext(DataContext);

    function handleChange(e) {
        const attributeName = e.target.name;
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
            <input type='checkbox'
                className='isDone'
                name='isDone'
                checked={task.isDone}
                onChange={handleChange}
            />
            <div className='Info'>
                <div className='Title'>{task.title}</div>
                <div className='Extra'></div>
            </div>
            <input type='checkbox'
                className='isStarred'
                name='isStarred'
                checked={task.isStarred}
                onChange={handleChange}
            />
        </div>
    );
}

export default Task;