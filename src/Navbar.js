import React from "react";
import styled from "styled-components";
import logo from "./images/Airbnb-logo.jpg";
function Navbar() {
  return (
    <StyledNav>
      <img src={logo} width="100px" alt="Airbnb logo"/>
    </StyledNav>
  );
}
export default Navbar;
const StyledNav = styled.nav`
  background: white;
  padding: 10px 100px;
  filter: drop-shadow(1px 1px 6px gainsboro);
`;
