function TodoList({ tasks, deleteTask, startEdit }) {
  return (
    <div className="todo-list flex flex-col shadow">
      {tasks.length === 0 ? <p>No tasks yet</p> : null}

      {tasks.map((task) => (
        <div key={task.id} className=" mb-2 flex justify-between gap-19 items-center h-full rounded-2xl bg-gray-400 ">
          <span className="px-4 py-2">{task.text}</span>

          <div className=" flex gap-0.5">
            <button onClick={() => startEdit(task.id)} className=" bg-blue-700 px-4 py-2 rounded-2xl cursor-pointer">Edit</button>
            <button onClick={() => deleteTask(task.id)} className=" bg-blue-700 px-4 py-2 rounded-2xl cursor-pointer">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
