import { useState } from "react"


export default function TodoList(){
    let[Todos,setTodos] = useState(["sample task"]);
    let[newTodo, setNewTodo] = useState("");

    function updateNewTodo(event){
        setNewTodo(event.target.value)
    }

    function updateTodo(){
        console.log("working");
        setTodos([...Todos,newTodo]);
        setNewTodo("");
    }
    return (
        <div>
            <h1>my first todo app</h1>
            <input placeholder="add your task" value={newTodo} onChange={updateNewTodo}></input>
            <button onClick={updateTodo}>add Task</button>
            <br></br> <br></br>
            <hr></hr>
            <h3>TodoList</h3>
            <ul>
                {
                    Todos.map((tasks)=>(
                        <li>{tasks}</li>
                    ))
                }
            </ul>
        </div>
    )
}