import { useState } from "react";
//import "./App.css";

export const Counter=({init})=>{


    const [count,setCount]=useState(0)
    return(
        <>
            <h1 style={{color:"red" ,marginTop: 50,}}>Counter:{count}</h1>
            <button  style={{color:"green" ,marginTop: 30,width:150,height:30}}
            onClick={()=>{
                setCount(count+1);
            }}>
            Increment
            </button>

            <button style={{color:"green" ,marginTop: 30,width:150,height:30}}
            onClick={()=>{
                
                setCount(count-1);
            }}>
            Decrement
            </button>

            <button style={{color:"green" ,marginTop: 30,width:150,height:30}}
            onClick={()=>{
                
                setCount(count*2);
            }}>
            Double
            </button>
            
            
             </>
    )
}
