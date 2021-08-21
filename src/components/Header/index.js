import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Comic App</Link>
    </HeaderContainer>
  );
};

export default Header;
