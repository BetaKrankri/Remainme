import './auxStyles.scss';
import ListNav from './components/ListNav/ListNav';
import TaskBoard from './components/TaskBoard/TaskBoard';

function App() {
  return (
    <div className="App">

      <ListNav />

      <TaskBoard />

      {/* <div className='TaskDetails'></div> */}
    </div>
  );
}

export default App;
