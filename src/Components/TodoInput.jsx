import { useState } from "react";

export function TodoInput({handleAddTodo}){
const [text,setText]=useState("");
return (
    <div style={{marginTop:30}} >
        <input style={{height:30,width:250,fontSize:20}}
         type="text"
         onChange={(e) => setText(e.target.value)}
        />
        <button style={{backgroundColor:"blue" ,height:30,marginLeft:30,fontSize:20}} onClick={()=>{
            handleAddTodo(text)}}>
         Add Todo
        </button>
    </div>
)
}