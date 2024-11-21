/** 
 * This component is a styled component and contains a Checklist.
 * The Checklist contains of a H1 heading, a list of tasks, an input field for adding new tasks, and a add task button. 
 * 
 * To add: A delete button, and mark all.
 */

import styled from "styled-components";

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

// Heading with checker icon
const Header = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 200;
  color: #454545;
  margin-bottom: 20px;

  i {
    font-size: 30px;
    color: #0eb0b7;
    margin-right: 10px;
  }
`;

// List of tasks
const TaskList = styled.div`
  margin-top: 1rem;
`;

// Each Item in the list
const TaskItem = styled.div`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 10px;
  box-shadow: 0 2px 0 -1px #ebebeb;

  &:last-of-type {
    box-shadow: none;
  }

  input[type="checkbox"] {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
  }

  label {
    display: inline-block;
    font-weight: 200;
    padding: 10px 5px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: calc(50% + 2px);
      left: 0;
      width: 0%;
      height: 1px;
      background: #cd4400;
      transition: 0.25s ease-in-out;
    }

    &:after {
      content: "";
      position: absolute;
      z-index: 0;
      height: 18px;
      width: 18px;
      top: 9px;
      left: -25px;
      box-shadow: inset 0 0 0 2px #d8d8d8;
      border-radius: 4px;
      transition: 0.25s ease-in-out;
    }

    .fa-check {
      position: absolute;
      z-index: 1;
      left: -31px;
      top: 0;
      font-size: 1px;
      line-height: 36px;
      width: 36px;
      height: 36px;
      text-align: center;
      color: transparent;
      text-shadow: 1px 1px 0 white, -1px -1px 0 white;
    }
  }

  input:checked + label {
    color: #717171;

    &:before {
      width: 100%;
    }

    &:after {
      box-shadow: inset 0 0 0 2px #0eb0b7;
    }

    .fa-check {
      font-size: 20px;
      line-height: 35px;
      color: #0eb0b7;
    }
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

// Add Task button
const AddButton = styled.div`
  margin-top: 20px;
  padding: 0.8rem 1.2rem;
  background-color: #fd6f00;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 200;
  transition: 0.25s;

  &:hover {
    background-color: #e65c00;
  }

  i {
    margin-right: 5px;
  }
`;

const Checklist = () => {
  return (
    <Wrapper>
      {/* Heading with check icon */}
      <Header>
        <i className="fa fa-check"></i> Johanna's Checklist
      </Header>

      {/* Checklist */}
      <TaskList>
        <TaskItem>
          <input type="checkbox" id="example-task" />
          <label htmlFor="example-task">
            <i className="fa fa-check"></i> Do this
          </label>
        </TaskItem>
      </TaskList>

      {/* Input field and Add task button */}
      <InputField type="text" placeholder="Write a task..." />
      <AddButton>
        <i className="fa fa-plus"></i> Add Task
      </AddButton>
    </Wrapper>
  );
};

export default Checklist;

