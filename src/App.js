import './css/main.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';

function App() {
  return <div className="App">
    <h1>To-do App</h1>
    <Todos/>
    <DisplayTodos/>
  </div>
}

export default App;