import { useState } from 'react';
import './auxStyles.scss';
import ListNav from './components/ListNav/ListNav';
import TaskBoard from './components/TaskBoard/TaskBoard';

function App() {
  const [data, setData] = useState([
    {
      listName: 'Tareas',
      taskList: [{
        title: 'Primer Rocordatorio',
        isDone: false,
        isStarred: true,
        dateCreation: new Date(),
      },
      {
        title: 'Segundo Rocordatorio',
        isDone: true,
        isStarred: true,
        dateCreation: new Date(),
      }]
    }]);

  function getListNames() {
    // Regresa una arreglo con los nombres de las listas 
    return data.map(list => list.listName);
  }

  function getTasksFromList(listName) {

    const foundList = data.find(list => list.listName === listName);
    return foundList ? foundList.taskList : [];
  }

  function addNewList(newListName) {
    setData(prevState => [...prevState, {
      listName: newListName,
      taskList: []
    }]);
  }


  return (
    <div className="App">
      <ListNav listNames={getListNames()} />
      <TaskBoard />
      {/* <div className='TaskDetails'></div> */}
    </div>
  );
}

export default App;
