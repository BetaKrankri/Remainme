import { useContext } from "react";
import { DataContext } from "../../DataContext";
import NewItem from "../NewItem/NewItem";
import Task from "./Task/Task";


function TaskBoard() {
    const { currentList, tasks} = useContext(DataContext);

    // guarda la lista actual de tasks en ´currentList´
    let tasksInCurrentList = tasks.filter(task => task.listName === currentList);


    return (
        <div className='TaskBoard'>

            <div className='Header'>
                <div className='icon'></div>
                <div className='label'>{currentList}</div>
            </div>

            <div className='Body'>
                {tasksInCurrentList.map((task, i) =>
                    <Task task={task} key={task.creationDate} />)}
            </div>

            <div className='Footer'>
                <NewItem />
            </div>

        </div >
    );
}

export default TaskBoard;