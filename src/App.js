import { useState } from 'react';
import './auxStyles.scss';
import ListNav from './components/ListNav/ListNav';
import TaskBoard from './components/TaskBoard/TaskBoard';
import { DataProvider } from './DataContext';

import fetchedData from './data.json';

function App() {

  return (
    <DataProvider fetchedData={fetchedData} >
      <div className="App">
        <ListNav />
        <TaskBoard />
        {/* <div className='TaskDetails'></div> */}
      </div>
    </DataProvider>
  );
}

export default App;
