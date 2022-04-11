// Problem: Add Todos on click of submit button. On clicking any of the todos, it has to be marked. i.e -> completed todos become incomplete and vice versa. 
import { useState } from "react";

const Todo = ({ item }) => {
    const [strike, setStrike] = useState(false);

    const todoHandler = () => {
        setStrike(prev => !prev);
    }

    return (
        <div>
            <li className={`${strike ? "strike" : ""}`} key={item} onClick={() => todoHandler(item)}>{item}</li>
        </div>
    )
}

const AddTodo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const submitHandler = () => {
        setTodos(prev => [...prev, newTodo]);
        setNewTodo("");
    }

    return (
        <div>
            <label htmlFor="">Add Todo: </label>
            <input type="text" name="" id="" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={submitHandler}>Submit</button>
            {todos.map(item => (
                <Todo item={item} />
            ))}
        </div>
    )
}

export { AddTodo };
