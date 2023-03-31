import React, { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children, fethchedData }) {

  const [data, setData] = useState(fethchedData);

  return (
    <DataContext.Provider
      value={{ data, setData }}
    >
      {children}
    </DataContext.Provider>
  );
}
