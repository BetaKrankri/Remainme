import { useContext } from "react";
import { DataContext } from "../../DataContext";
import NewItem from "../NewItem/NewItem";
import Task from "./Task/Task";


function TaskBoard() {
    const { currentList, data, setData } = useContext(DataContext);

    let currentTasks = []
    currentTasks = data.find(list => list.listName === currentList).taskList;

    return (
        <div className='TaskBoard'>

            <div className='Header'>
                <div className='icon'></div>
                <div className='label'>{currentList}</div>
            </div>

            <div className='Body'>
                {currentTasks.map((task, i) =>
                    <Task task={task} key={task.creationDate} />)}
            </div>

            <div className='Footer'>
                <NewItem />
            </div>

        </div >
    );
}

export default TaskBoard;