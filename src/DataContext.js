import React, { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children, data }) {

  //Para mostrar toda la informacion
  const [tasks, setTasks] = useState(data.tasks);
  const [lists, setLists] = useState(data.lists);


  //Para mostrar la lista actual en la vusta de taskboard
  //*Podria pasarse a App */
  const [currentList, setCurrentList] = useState('Tareas');

  return (
    <DataContext.Provider
      value={{
        tasks, setTasks,
        lists, setLists,
        currentList, setCurrentList
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
