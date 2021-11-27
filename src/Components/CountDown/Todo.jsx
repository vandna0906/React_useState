import { useState } from "react";
import {TodoInput} from "./TodoInput";
import {TodoList} from "./TodoList";
export  function Todo(){
    const [todos,setTodos]=useState([]);
    const handleAddTodo=(item)=>{
        setTodos([...todos,item])
    };
    
    return (
         <div>
    <TodoInput handleAddTodo={handleAddTodo}/>
    <TodoList TodoList={todos}/>
    </div>
    );
}