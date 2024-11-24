import styled from "styled-components";
import useTaskStore from "../store/store";
import DeleteButton from "./DeleteButton";

// Container for the task list, adding spacing at the top
const TaskListContainer = styled.div`
  margin-top: 1rem;
`;

// Styled component for each task item in the list
const TaskItem = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  padding: 10px 5px; 
  margin-bottom: 10px;
  box-shadow: 0 2px 0 -1px #ebebeb;

  &:last-of-type {
    box-shadow: none; // Remove shadow for the last task in the list
  }
`;

// Checkbox styling
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
  accent-color: #0eb0b7; // Change color of the checkbox
`;

// Task label styling
const TaskLabel = styled.label`
  font-weight: 200;
  position: relative;
  padding-left: 10px;

  // Add a checkmark to completed tasks
  &::before {
    content: "✓"; // Unicode for a checkmark
    position: absolute;
    left: 0;
    color: #0eb0b7;
    font-size: 16px;
    opacity: ${(props) => (props.checked ? "1" : "0")}; // Show checkmark only if task is completed
    transition: opacity 0.2s ease-in-out;
  }
`;

// TaskList component dynamically renders tasks from the Zustand store
const TaskList = () => {
  const { tasks, toggleTask, removeTask } = useTaskStore(); // Access tasks and actions from Zustand store

  return (
    <TaskListContainer>
      {tasks.map((task) => (
        <TaskItem key={task.id}>
          {/* Checkbox for toggling task completion */}
          <Checkbox
            id={`task-${task.id}`}
            checked={task.completed} // Reflect task's completion state
            onChange={() => toggleTask(task.id)} // Toggle task completion in store
          />
          {/* Label displaying the task's text */}
          <TaskLabel htmlFor={`task-${task.id}`} checked={task.completed}>
            {task.text}
          </TaskLabel>
          {/* Delete button to remove the task */}
          <DeleteButton
            onClick={() => removeTask(task.id)}
            title="Remove Task"
          />
        </TaskItem>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;