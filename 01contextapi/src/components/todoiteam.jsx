import React from "react";
import { useTodo } from "../context/todoContext";
import { useState } from "react";
const todoiteam = ({ todo }) => {

  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { updateTodo, removeTodo, toggleComplete } = useTodo();


  const editTodo = () => {
    updateTodo(todo.id , {todo: todoMsg})
    setIsTodoEditable(false);
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  }
    return (
     <div className={`flex border border-black/10 
     rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 ${
     todo.completed ? "bg-[#728ad8]" : "bg-[#c5c5c5]"}`}>
       <input
      type="checkbox"
      className="mr-2 cursor-pointer"
      checked={todo.completed}
      onChange={toggleCompleted}
       />
       <input
       type="text"
       className={`flex-1 border outline-none w-full bg-transparent rounded-lg ${
         isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
       value={todoMsg}
       onChange={(e) => setTodoMsg(e.target.value)}
       readOnly={!isTodoEditable}
       />
       {/* edit save btn  */}
       <button
      className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      onClick={() => {
        if (todo.completed) return;
        if (isTodoEditable) {
        editTodo();
        } else {
        setIsTodoEditable((prev) => !prev);
        }
      }}
      disabled={todo.completed}
       >
       {isTodoEditable ? "📁" : "✏️"}
       </button>
       <button
      className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      onClick={() => removeTodo(todo.id)}
       >
       ❌
       </button>
     </div>
    );
};

export default todoiteam;