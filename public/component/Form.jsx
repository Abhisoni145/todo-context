import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../provider/TodoContext'

const Form = () => {
    const { addTodo,edit,updateTodo} = useContext(TodoContext);

    const[text,setText]=useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
      // addTodo(text);
      edit.isEdit ? updateTodo({ id: edit.todo.id, text }) : addTodo(text);

        setText("")
    };
  useEffect(() => { 
      setText(edit.todo.text)
    }, [edit]);




  return (
    <div className="card p-2">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='Enter Here....' className='form-control' onChange={(e)=>setText(e.target.value)} value={text} required />
             <button className="btn btn-success w-100 my-2">Save</button>
          </form>
        </div>
  )
}

export default Form