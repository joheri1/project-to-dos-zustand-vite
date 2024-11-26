/** 
 * 
 * This styled component displays the task counter for the checklist. 
 * 
 * The TaskCounter dynamically calculates and displays the total number of tasks and the number of incomplete tasks using Zustand for state management. 
 * 
 */

import React from "react";
import useStore from "../../store/store"; // Zustand
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; 
  font-size: 1rem;
`;

const StrongText = styled.span`
  font-weight: bold;
`;

const TaskCounter = () => {
  const tasks = useStore((state) => state.tasks);
  const totalTasks = tasks.length;
  const incompleteTasks = tasks.filter((task) => !task.completed).length;

  return (
    <CounterWrapper>
    <StrongText>Completed tasks: </StrongText> {incompleteTasks}/{totalTasks}
  </CounterWrapper>
  );
};

export default TaskCounter;