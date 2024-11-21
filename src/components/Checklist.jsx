
/**
 *  This component implements a checklist application. 
 * 
 * It uses Zustand for state management, allowing tasks to be added, removed, toggled between completed and not completed). 
 * All tasks can be marked as completed. 
 * 
 * The UI includes a form for adding tasks, a list of current tasks, and functionality to interact with each task.
 * 
 * */

import { useState } from "react"; // Import useState hook for state management within the component
import useTaskStore from "./store/store"; // Import Zustand store for global state management

const Checklist = () => {
  // Destructure functions and state variables from the Zustand store
  const { tasks, addTask, removeTask, toggleTask, markAllCompleted } = useTaskStore();

  const [newTask, setNewTask] = useState(""); // Local state to manage input field value for new tasks

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) { // Check if input is not empty or only whitespace
      addTask(newTask); // Add the task to the store
      setNewTask(""); // Clear the input field
    }
  };

  return (
    <div>
      {/* Heading with a checklist icon */}
      <h1>
        <i className="fa fa-check"></i> Johanna's Checklist
      </h1>

      {/* Form for the to-do list; prevents default form submission */}
      <form id="todo-list" onSubmit={(event) => event.preventDefault()}>
        {/* Map through tasks in the store and render each as a list item */}
        {tasks.map((task) => (
          <span key={task.id} className="todo-wrap">
            {/* Checkbox for marking task as completed or not */}
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={() => toggleTask(task.id)} // Toggle the completed state of the task
            />
            {/* Label for the task, displaying the task text */}
            <label htmlFor={task.id} className="todo">
              <i className="fa fa-check"></i>
              {task.text}
            </label>
            {/* Delete button to remove a task */}
            <span className="delete-item" title="remove" onClick={() => removeTask(task.id)}>
              <i className="fa fa-times-circle"></i>
            </span>
          </span>
        ))}

        {/* Input field for typing a new task */}
        <input
          type="text"
          className="input-todo"
          placeholder="Write a task..." // Placeholder text to guide the user
          value={newTask} // Controlled input bound to the newTask state
          onChange={(event) => setNewTask(event.target.value)} // Event to update state as the user types
        />
         {/* Add button to create a new task */}
         <div id="add-todo" onClick={handleAddTask}>
          <i className="fa fa-plus"></i> Add Task
        </div>
      </form>
    </div>
  );
};

export default Checklist; // Export the Checklist component as the default export
