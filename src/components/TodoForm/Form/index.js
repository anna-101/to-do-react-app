import ICON from "../../../Icons/plus-svgrepo-com.svg";
import { useState } from "react";

export default function Form( {setTodos}){



    const [inputValue, setInputValue] = useState('');



const handleSubmit = (event) =>{
    event.preventDefault(); // Prevent submit before the form loads.
    const value = event.target.todo.value;
    const newTodo = {title: value ,id: crypto.randomUUID(), is_completed: false};
    setTodos((prevTodos) => [...prevTodos,newTodo,
    ]);
    console.log(newTodo);
    event.target.reset(); // Resetting input field.
    setInputValue('');
};


const handleChange = (e) =>{
    setInputValue(e.target.value)
}

const handleBtnClickOrSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos,{title: inputValue ,id: crypto.randomUUID(), is_completed: false},
    ]);
    setInputValue('');
}



    return(
        <form className="form-items" onSubmit={handleSubmit}>
        {/* // <form className="form-items" onSubmit={handleBtnClickOrSubmit}> */}

            <div >
            <input value={inputValue} onChange={handleChange} className="form-input" type = "text" id = "todo" name="todo" placeholder="Add Your Tasks here..."/>
            </div>
            <div>
            {/* <div className="submit-btn" onClick={handleSubmit}>Submit</div> */}
            <div className="submit-btn" onClick={handleBtnClickOrSubmit}>Submit</div>

            </div>
        </form>
    );
}