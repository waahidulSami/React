import { createContext , useContext } from "react";


export const TodoContext = createContext({
    todos : [{
        id: 1,
        todo: "Learn React",
        completed: false
    }],
    addtodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
})


export const useTodo = () => {
    return useContext(TodoContext);
}



export const TodoProvider = TodoContext.Provider;