import { useContext } from "react";
import { DataContext } from "../../../DataContext";

function Task({ task }) {
    const { setData } = useContext(DataContext);

    function handleDoneCheckbox(e) {
        console.log('isDone Clicked')
    }
    
    function handleStarredCheckbox() { 
        console.log('isStarred Clicked')
    }



    return (
        <div className='Task'>
            <input type='checkbox'
                className='isDone'
                name='isDone'
                checked={task.isDone}
                onClick={handleDoneCheckbox}
            />
            <div className='Info'>
                <div className='Title'>{task.title}</div>
                <div className='Extra'></div>
            </div>
            <input type='checkbox'
                className='isStarred'
                name='isStarred'
                checked={task.isStarred}
                onClick={handleStarredCheckbox}
            />
        </div>
    );
}

export default Task;