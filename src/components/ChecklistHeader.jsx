/** 
 * 
 * This styled component contains the Header of the Checklist. 
 * 
 * The header dynamically displays a title passed as a prop (title).
 * 
 * 
 */

import React from "react";
import styled from "styled-components";

const StyledChecklistHeader = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 200;
  color: #454545;
  margin-bottom: 20px;

  p {
    padding: 20px;
    font-size: 16px;
    font-weight: 300;
    color: #888;
    font-style: italic; 
    margin-top: 0;
    border-bottom: 1px solid;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const ChecklistHeader = ({ title, description }) => {
  return (
    <StyledChecklistHeader>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledChecklistHeader>
  );
};

export default ChecklistHeader;
