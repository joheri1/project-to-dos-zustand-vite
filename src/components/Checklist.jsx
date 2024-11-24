/** 
 * This component is a styled component and contains a Checklist.
 * The Checklist contains of a H1 heading, a list of tasks, an input field for adding new tasks, and a add task button. 
 * 
 * To add: A delete button, and mark all.
 */

import React from "react"; 
import styled from "styled-components";
import Header from "./Header";
import DeleteButton from "./Buttons/DeleteButton";
import AddTaskButton from "./Buttons/AddTaskButton";
import useStore from "../store/store"; //Zustand

// Wrapper for the Checklist

const Wrapper = styled.div`
  padding: 50px;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    top: 50%;
    bottom: 0;
    left: 10px;
    right: 10px;
    border-radius: 100px / 10px;
  }
`;

// List of tasks
const TaskList = styled.div`
  margin-top: 1rem;
`;

// Each task in the list
const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 0 -1px #ebebeb;

  &:last-of-type {
    box-shadow: none;
  }

  input[type="checkbox"] {
    margin-right: 10px;
    accent-color: #0eb0b7; // Modern browsers support this for styling checkboxes
  }

  label {
    flex-grow: 1;
    font-weight: 200;
    padding-left: 10px;
  }
`;

// Input field for adding new tasks to the Checklist
const InputField = styled.input`
  border: none;
  outline: none;
  font-weight: 200;
  position: relative;
  margin: 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


const Checklist = () => {
  const { tasks, toggleTask, removeTask, addTask, title } = useStore(); // Access tasks and functions
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask); // Add new task
      setNewTask(""); // Clear input field
    }
  };

  return (
    <Wrapper>
      {/* Heading component */}
      <Header title={title} />

      {/* Task list */}
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.completed}
              onChange={() => toggleTask(task.id)} // Toggle completion state
            />
            <label htmlFor={`task-${task.id}`}>{task.text}</label>
            <DeleteButton
              onClick={() => removeTask(task.id)} // Remove the task
              title="Delete this task"
            />
          </TaskItem>
        ))}
      </TaskList>

      {/* Input field and Add Task button */}
      <InputField
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Write a task..."
      />
      <AddTaskButton onClick={handleAddTask}>Add Task</AddTaskButton>
    </Wrapper>
  );
};

export default Checklist;

