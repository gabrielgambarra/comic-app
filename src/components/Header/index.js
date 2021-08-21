import React from "react";
import { AppName, HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <AppName to="/">Comic App</AppName>
    </HeaderContainer>
  );
};

export default Header;
