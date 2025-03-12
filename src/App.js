import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <h1 style={{margin: '60px', color:'rgb(221 192 164)', fontSize: '60px'}}>Checkdux</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
