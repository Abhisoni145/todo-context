import React, { useContext } from 'react'
import LIstitem from './LIstitem'
import TodoContext from '../provider/TodoContext'

const Listgroup = () => {


    const { todos }=useContext(TodoContext)
    
  return (
    <div className="card p-3 rounded-1 my-2">
    <ul className="list-group">
     {todos.map(todo=><LIstitem key={todo.id} todo={todo} />)}
    </ul>
  </div>
  )
}

export default Listgroup