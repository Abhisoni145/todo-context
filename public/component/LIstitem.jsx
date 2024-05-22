import React, { useContext } from 'react'
import TodoContext from '../provider/TodoContext'

const LIstitem = ({ todo }) => {

    const { removeTodo,editTodo } = useContext(TodoContext);


  return (
    <li className='list-group-item rounded-1'>
        {todo.text}
        <samp className='float-end'>
          <button className="btn btn-sm rounded-1 bg-warning" onClick={()=>editTodo(todo)}>Edit</button>
          <button className="btn mx-2 btn-sm bg-danger rounded-1" onClick={()=>removeTodo(todo.id)}>Delete</button>
        </samp>
      </li>
  )
}

export default LIstitem