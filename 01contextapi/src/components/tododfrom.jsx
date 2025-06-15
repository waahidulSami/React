import { useTodo } from '../context/todoContext';
import { useState } from 'react';






const TodoForm = () => {


const [todo, setTodo] = useState('');

const { addTodo } = useTodo();

const add = (e) => {
    e.preventDefault();
    if(!todo.trim()) return; // Prevent adding empty todos
    addTodo({ todo, completed: false });
    setTodo(''); // Clear the input field after adding
}

    return (
        <form className="flex items-center mb-4" onSubmit={add}>
      <input type="text" 
      placeholder="Add a new task" 
      className="flex-1 px-4 py-2 border
       border-gray-300 rounded-lg focus:outline-none 
       focus:ring-2 focus:ring-blue-500" 
       
              value={todo}
       onChange={(e) => setTodo(e.target.value)}
       />

      
      
      <button type="submit"
      className="ml-2 px-4 py-2 bg-blue-500
       text-white rounded-lg hover:bg-blue-600 
       focus:outline-none focus:ring-2 focus:ring-blue-500">Add</button>
    </form>
    );
};

export default TodoForm;