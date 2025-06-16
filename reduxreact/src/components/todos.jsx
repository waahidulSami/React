import React from "react";

import { useSelector , useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";



function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

     return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Todos</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg "
          >
            <span className="text-white text-lg font-medium">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo({ id: todo.id }))}
              className="flex items-center justify-center bg-white text-red-600 hover:bg-red-100 rounded-full p-2 transition-colors cursor-pointer hover:bg-red-200"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos
