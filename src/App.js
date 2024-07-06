
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoForm/TodoList';

export default function App() {
   const[todos,setTodos] = useState([]);
   return (
  <div className='wrapper'>
  <TodoForm todos={todos} setTodos={setTodos} />
  
  </div>
   );
}

//export default App;
