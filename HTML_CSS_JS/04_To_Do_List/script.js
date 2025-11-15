// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

  // Get references to DOM elements
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Retrieve tasks from localStorage or initialize empty array
  const taskListArray = JSON.parse(localStorage.getItem("tasks")) || [];

  // Save initial state to localStorage
  localStorage.setItem("tasks", JSON.stringify(taskListArray));

  // Add click event listener to the add task button
  addTaskButton.addEventListener("click", () => {
    // Get task text and remove whitespace
    const taskText = taskInput.value.trim();
    
    // Only proceed if task text is not empty
    if (taskText) {
      // Create new list item
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create delete button for the task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });

      // Add delete button to list item
      li.appendChild(deleteButton);
      // Add list item to task list
      taskList.appendChild(li);
      // Clear input field
      taskInput.value = "";
      // Update array and localStorage
      taskListArray.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(taskListArray));
    }
  });
});