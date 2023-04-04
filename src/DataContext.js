import React, { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children, tasksBD }) {

  const [data, setData] = useState(tasksBD);
  const [currentList, setCurrentList] = useState('Tareas');

  return (
    <DataContext.Provider
      value={{ data, setData, currentList, setCurrentList }}
    >
      {children}
    </DataContext.Provider>
  );
}
