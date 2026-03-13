import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
export default function Todo(){
    let [todo,settodo]= useState([{task:"sample task", id:uuidv4()}]);
    let [newtodo,setnewtodo]=useState("");
    let updateTodoValue = (event)=>
    {
        setnewtodo(event.target.value);
    }
    let addNewTask=() => {
        settodo((prevTodo)=> 
        [...prevTodo,
            {task:newtodo,id:uuidv4()}
        ])
                    
    
        setnewtodo("");  

    }
    return (
        <div>
            
            <input placeholder="Enter task" value={newtodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}> Add Task </button>
            <h4>TASK TODO</h4>
            <ul>
                {todo.map((todo)=>(
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );}