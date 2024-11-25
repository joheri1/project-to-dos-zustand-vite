/** 
 * This component is a styled component and contains a Checklist.
 * 
 * The Checklist contains of a H2 heading, a list of tasks, an input field for adding new tasks, a delete button and a add task button. 
 * 
 * To add: Mark all and task counter.
 */

import React from 'react';
import styled from "styled-components";
import ChecklistHeader from "./ChecklistHeader";
import TaskList from "./TaskList";
import AddTaskButton from "../Buttons/AddTaskButton";
import useStore from "../../store/store"; // Zustand

// Wrapper for the Checklist

const Wrapper = styled.div` 
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (max-width: 768px) {
    margin: 10px; /* Margin for smaller screens */
    padding: 15px; /* Padding for smaller screens */
  }

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

// Input field for adding new tasks to the Checklist
const InputField = styled.input`
  border: none;
  outline: none;
  font-weight: 200;
  position: relative;
  margin-top: 40px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checklist = () => {
  const { addTask, title, description } = useStore(); // Endast relevanta funktioner och data
  const [newTask, setNewTask] = React.useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask); // Add new task
      setNewTask(""); // Clear input field
    }
  };

  return (
    <Wrapper>
      {/* Checklist Header with Description */}
      <ChecklistHeader title={title} description={description} />

      {/* Task list */}
      <TaskList /> 
      {/* TaskList component to show list of tasks */}

      {/* Input field and Add Task button */}
      <InputField
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Write a task..."
      />
      <AddTaskButton onClick={handleAddTask}>Add Task</AddTaskButton>
    </Wrapper>
  );
};

export default Checklist;

