/**
 * Header Component
 *
 * This styled component contains the main header for the entire page.
 * 
 * It displays the text with a FontAwesome checkmark icon.
 */

import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
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

  @media (max-width: 1024px) {
    font-size: 20px;

    i {
      font-size: 20px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <i className="fa fa-check"></i> Johanna's Checklists
    </StyledHeader>
  );
};

export default Header;
