import { children, createContext, useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    //const [todos, setTodos] = useState([{ id: 1, text: "i am constext" }, { id: 2, text: "i am react " }])

    //use reducer
    const initialState = {
        todos: [{ id: 1, text: "i am constext" }, { id: 2, text: "i am react " }],
        edit: { todo: {}, isEdit: false },
    };

    // reducer function
    
    
    const [state,dispatch]=useReducer(TodoReducer,initialState)
    

    
    const addTodo = (text) => {
        // setTodos([{ id: crypto.randomUUID(), text }, ...todos]);  // using for state

        dispatch({
            type: "SAVE_TODO",
            payload:{id:crypto.randomUUID(),text}
        })
    }

    const removeTodo = (id) => {
        // setTodos(todos.filter(item => item.id !== id)); 
        dispatch({
            type: "DELETE_TODO",
            payload:id,
        })
    }

    // edit function
    const editTodo = (todo) => {
        dispatch({
            type: "EDIT_TODO",
            payload:todo,
        })
    }

    // update function
    const updateTodo = (updatedTodo) => {
        dispatch({
            type: "UPDATE_TODO",
            payload: updatedTodo,
        })
        
    }





    return (
        <TodoContext.Provider value={{todos:state.todos,edit:state.edit,updateTodo,addTodo,removeTodo,editTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;






// step 1 : create context
// step 2 : create provider
// step 3 : create provider in app.jsx
// step 4 : check react dev tools