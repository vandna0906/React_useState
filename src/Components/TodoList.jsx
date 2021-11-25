import {TodoItem} from "./TodoItem"

export function TodoList({TodoList}){
    return(
        <>
        {TodoList.map((el) =>(
            <TodoItem item={el} />
        ))}
    </>
    );
}