import { useContext } from "react";
import { DataContext } from "../../DataContext";
import NewItem from "../NewItem/NewItem";
import Task from "./Task/Task";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function TaskBoard() {
    const { currentList, tasks, setTasks} = useContext(DataContext);

    // guarda la lista actual de tasks en ´currentList´
    let tasksInCurrentList = tasks.filter(task => task.listName === currentList);

    function addNewTask(newTaskTitle) {
        setTasks(prev => [...prev, {
            title: newTaskTitle,
            isDone: false,
            isStarred: false,
            listName: currentList,
            creationDate: new Date(),
        }]);
    }



    return (
        <div className='TaskBoard'>

            <div className='Header'>
                <FontAwesomeIcon icon={faBars} className="button-icon"/>
                <div className='label'>{currentList}</div>
                {/* Agregar opcion de menu */}
            </div>

            <div className='Body'>
                {tasksInCurrentList.map((task, i) =>
                    <Task task={task} key={task.creationDate} />)}
            </div>

            <div className='Footer'>
                <NewItem onAdd={addNewTask}/>
            </div>

        </div >
    );
}

export default TaskBoard;