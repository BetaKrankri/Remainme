import './auxStyles.scss';
import ListNav from './components/ListNav/ListNav';
import TaskBoard from './components/TaskBoard/TaskBoard';
import { DataProvider } from './DataContext';
import { useState } from 'react';

import fetchedData from './data.json';

function App() {
  const [isListNavOpen, setIsListNavOpen] = useState(true);

  return (
    <DataProvider data={fetchedData} >
      <div className="App">
        <ListNav
          setIsListNavOpen={setIsListNavOpen}
          isListNavOpen={isListNavOpen} />
        <TaskBoard setIsListNavOpen={setIsListNavOpen}/>
        {/* <div className='TaskDetails'></div> */}
      </div>
    </DataProvider>
  );
}

export default App;
