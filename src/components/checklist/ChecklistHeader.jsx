/** 
 * 
 * This styled component contains the Header of the Checklist. 
 * 
 * The header dynamically displays a title passed as a prop (title and description).
 * 
 * 
 */

import React from "react";
import styled from "styled-components";

const StyledChecklistHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
  font-size: 30px;
  font-weight: 200;
  color: #454545;
  }

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
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const ChecklistHeader = ({ title, description }) => {
  return (
    <StyledChecklistHeader>
      <h2>{title}</h2>
      <p>{description}</p>
    </StyledChecklistHeader>
  );
};

export default ChecklistHeader;
