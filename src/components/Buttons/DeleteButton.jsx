/**
 * This component is for the button that deletes tasks from the list. 
 *
 * Includes hover effects.
*/

import styled from "styled-components";

// Styled component for the delete button with hover effects

const StyledDeleteButton = styled.span`
  font-size: 18px;
  color: #cd4400;
  cursor: pointer;
  opacity: 0.8;
  transition: color 0.3s, opacity 0.3s;

  &:hover {
    color: #ff4d4d; // Change color to red on hover
    opacity: 1; // Make the button fully visible on hover
  }

  // Circle for the delete button
  &::before {
    content: "✕"; // An "X" symbol
    font-weight: bold;
  }
`;

// DeleteButton component that is triggered when clicked
const DeleteButton = ({ onClick, title }) => (
  <StyledDeleteButton onClick={onClick} title={title} />
);

export default DeleteButton;