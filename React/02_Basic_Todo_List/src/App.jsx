import { useEffect, useState } from "react";
import './App.css'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null); // to know which task is being edited

  // Load tasks from localStorage on first page load
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (text) => {
    if (!text.trim()) return; // ignore empty input

    const newTask = {
      id: Date.now(),
      text,
    };

    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Start editing
  const startEdit = (id) => {
    setEditId(id);
  };

  // Update edit
  const updateTask = (text) => {
    setTasks(
      tasks.map((task) =>
        task.id === editId ? { ...task, text } : task
      )
    );
    setEditId(null);
  };

  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen">
      <div className=" bg-gray-600 p-5 flex flex-col justify-center items-center text-white rounded-2xl shadow-2xs">
        <h1 className=" mb-2 text-2xl">Todo List</h1>

      <TodoInput
        addTask={addTask}
        editId={editId}
        tasks={tasks}
        updateTask={updateTask}
      />

      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        startEdit={startEdit}
      />
      </div>
    </div>
  );
}

export default App;
