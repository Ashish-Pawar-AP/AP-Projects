import { useEffect, useState } from "react";

function TodoInput({ addTask, editId, tasks, updateTask }) {
  const [input, setInput] = useState("");

  // When editId changes, fill input with existing task text
  useEffect(() => {
    if (editId !== null) {
      const editTask = tasks.find((task) => task.id === editId);
      if (editTask) setInput(editTask.text);
    }
  }, [editId]);

  const handleSubmit = () => {
    if (editId !== null) {
      updateTask(input);
    } else {
      addTask(input);
    }
    setInput(""); // Clear input
  };

  return (
    <div className="todo-input mb-4">
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className=" placeholder-white shadow px-2 py-1.5"
      />

      <button onClick={handleSubmit} className=" bg-blue-600 px-4 py-1.5 shadow hover:bg-blue-700 cursor-pointer rounded-2xl">
        {editId !== null ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default TodoInput;
