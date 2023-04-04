import { useContext } from "react";
import { DataContext } from "../../DataContext";
import NewItem from "../NewItem/NewItem";
import Task from "./Task/Task";


function TaskBoard() {
    const { currentList, data } = useContext(DataContext);

    let currentTaskList = []
    currentTaskList = data.filter(list => list.listName === currentList);

    return (
        <div className='TaskBoard'>

            <div className='Header'>
                <div className='icon'></div>
                <div className='label'>{currentList}</div>
            </div>

            <div className='Body'>
                {currentTaskList.map((task, i) =>
                    <Task task={task} key={task.creationDate} />)}
            </div>

            <div className='Footer'>
                <NewItem />
            </div>

        </div >
    );
}

export default TaskBoard;