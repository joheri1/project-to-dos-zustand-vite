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

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const ChecklistHeader = ({ title }) => {
  return (
    <StyledChecklistHeader>
      {title}
    </StyledChecklistHeader>
  );
};

export default ChecklistHeader;
