import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function TodoList(){
    let[Todos,setTodos] = useState([{task:"sample task",id:uuidv4()}]);
    let[newTodo, setNewTodo] = useState("");

    function updateNewTodo(event){
        setNewTodo(event.target.value)
    }

    function updateTodo(){
        console.log("working");
        setTodos([...Todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo("");
    }

    function DeleteToDo(id){
        setTodos((prevTodos)=> prevTodos.filter((prevTodos)=> prevTodos.id != id));
    }

    function uppercaseAll(){
        setTodos((prevTask)=>(
            prevTask.map((todo)=>{
                return {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
            })
        ))
    }


    function UpperCaseOne(id){
        setTodos((prevTask)=>(
            prevTask.map((todo)=>{
                if(todo.id == id){
                    return {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
                }else{
                    return todo;
                }
            })
        ))
    }
    return (
        <div>
            <h1>my first todo app</h1>
            <input placeholder="add your task" value={newTodo} onChange={updateNewTodo}></input>
            &nbsp;&nbsp;&nbsp;
           <button onClick={updateTodo}>add Task</button>
            <br></br> <br></br>
            <hr></hr>
            <h3>TodoList</h3>
            <ul>
                {
                    Todos.map((todo)=>(
                        <li key={todo.id}>
                            <hr></hr>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;

                            <button onClick={() => DeleteToDo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>UpperCaseOne(todo.id)}>UpperCaseOne</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={uppercaseAll}>UpperCase All</button>
        </div>
    )
}