const TodoReducer = (state, action) => {

    if (action.type === "SAVE_TODO") {
        return {
            ...state,
            todos: [action.payload, ...state.todos],
        }
    } else if (action.type === "DELETE_TODO") {
        return {
            ...state,
            todos: state.todos.filter((item) => item.id !== action.payload)
        }
            
    } else if (action.type === "EDIT_TODO") {
        return {
            ...state,
            edit: { todo: action.payload, isEdit: true }
        }
    } else if (action.type === "UPDATE_TODO") {
        return {
            ...state,
            todos: state.todos.map((item) => item.id === action.payload.id ? action.payload : item),
            edit:{todo:{},isEdit:false},
        }
    }
};
    
export default TodoReducer; 