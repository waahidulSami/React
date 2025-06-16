import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}


export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo:(state, action) => {
            const todo={
                id:nanoid(),
                text: action.payload,

            }
            if (!todo.text.trim()) {
                return;
            }
            state.todos.push(todo);
        },
        removeTodo:(state ,action )=> {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        }
    }
})



export const { addTodo, removeTodo } = todoSlice.actions;


export default todoSlice.reducer;