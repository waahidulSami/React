
import { useEffect , useState } from 'react';
import { TodoProvider } from './context/todoContext';
import './App.css'

import TodoForm from './components/tododfrom';
import TodoItem from './components/todoiteam';



function App() {

    const [todos, settodos] = useState([]);

    const addTodo = (todo) => {
        settodos((prev) => [...prev , {id: Date.now(), ...todo}]);
    }

    const updateTodo = (id, todo) => {
        settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));

    }
    const removeTodo = (id) => {
        settodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        settodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
            )
        );
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos && todos.length > 0) {
            settodos(todos);
        }
    }
    , []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    , [todos]);

  return  (
    <TodoProvider value={{
        todos,
        addTodo,
        removeTodo,
        updateTodo,
        toggleComplete,
    }}>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="bg max-w-md mx-auto py-8">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">To-Do App</h1>
          </header>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {/* form field */}
              <div className="items-center mb-4">
                <TodoForm />
              </div>
            </div>
            <div className="items-center mb-4">
              {/* todo items */}
              {todos.map((todo) => (
                <div key={todo.id} className="mb-4">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
