/** 
 * 
 * This styled component contains the Header of the Checklist. 
 * 
 * It retrieves the title dynamically from the Zustand store, allowing 
 * the header text to be managed globally across the application.
 * 
 * The children prop allows dynamic text to be passed into the header, making it reusable across different parts of the app.
 * 
 * 
 */

import React from "react";
import styled from "styled-components";
import useStore from "../store/store";

const StyledHeader = styled.h1`
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

const Header = () => {
  const title = useStore((state) => state.title); // Get title using Zustand store. 

  return (
    <StyledHeader>
      <i className="fa fa-check"></i> {title}
    </StyledHeader>
  );
};

export default Header;
