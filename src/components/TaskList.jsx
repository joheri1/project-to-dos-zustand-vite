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
  margin-bottom: 5px;
  padding: 10px 5px;
  box-shadow: 0 2px 0 -1px #ebebeb;

  &:last-of-type {
    box-shadow: none; // Remove shadow for the last task in the list
  }
  &:hover .delete-button {
    opacity: 1; // Make button visible on hover
  }
`;

// Checkbox styling
const Checkbox = styled.input({ type: "checkbox" })`
  margin-right: 10px;
  accent-color: #0eb0b7; // Change color of the checkbox
`;

// Task label styling
const TaskLabel = styled.label`
  font-weight: 200;
  position: relative;
  padding-left: 10px;
  transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;

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
            className="delete-button"
            onClick={() => removeTask(task.id)}
            title="Remove Task"
          />
        </TaskItem>
      ))}
    </TaskListContainer>
  );
};

export default TaskList;

