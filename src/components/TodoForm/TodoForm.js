import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import ToDoTotal from "./ToDoTotal";
import TodoList from "./TodoList";

export default function App(){
    const[todos,setTodos] = useState([]);
    const todos_completed = todos.filter((todo) => todo.is_completed === true).length;
    const todos_total = todos.length;
    return(
        <div>
        <Header />
        <ToDoTotal todos_completed={todos_completed} todos_total={todos_total}/>
        <Form setTodos={setTodos}/>
        <TodoList todos ={todos} setTodos={setTodos}/>
        </div>
    );
}