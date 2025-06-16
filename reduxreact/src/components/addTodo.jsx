import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(input))
        setInput(''); // Clear the input field after adding the todo

    }


return (
    <form
        onSubmit={addTodoHandler}
        className="flex items-center gap-4 bg-gray-900 p-6 rounded-xl shadow-lg max-w-md mx-auto mt-16"
    >
        <input
            type="text"
            className="flex-1 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-3 px-4 transition-colors duration-200 placeholder-gray-400"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
        >
            Add
        </button>
    </form>
)
}

export default AddTodo