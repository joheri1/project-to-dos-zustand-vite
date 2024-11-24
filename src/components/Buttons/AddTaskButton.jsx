import React from "react";
import styled from "styled-components";

// Styled component for the Add Task button
const StyledAddTaskButton = styled.button`
  margin-top: 20px;
  padding: 0.8rem 1.2rem;
  background-color: #fd6f00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 200;
  transition: background-color 0.25s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #e65c00;
  }

  &::before {
    content: "+"; // Add plus symbol
    font-size: 18px;
    font-weight: bold;
    margin-right: 5px;
  }
`;

const AddTaskButton = ({ onClick, children }) => (
  <StyledAddTaskButton onClick={onClick}>
    {children}
  </StyledAddTaskButton>
);

export default AddTaskButton;
