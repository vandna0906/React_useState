import React, { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoList } from "./TodoList"
import { v4 as uuid } from "uuid"
import  Page from "./Page"
function Todo() {
  const [list, setlist] = React.useState([])
 
  const [page, setpage] = React.useState(1)
  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: uuid(),
      title,
      description,
      status: list.length % 2 === 0 ? true : false,
    }
    setlist([...list, payload])
  }
 
  const perpage = 2
  const filterResult = list.filter(
    (_, i) => i >= (page - 1) * perpage && i < page * perpage
  )
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList data={filterResult} />
     
      <div>
        <Page
          total={5}
          currpage={page}
          onclickcallback={page => setpage(page)}
        />
      </div>
    </div>
  )
}
export default Todo