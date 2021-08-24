import React from "react";
import { AppName, HeaderContainer, HeaderNav } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <AppName to="/">Comic App</AppName>

      <nav>
        <HeaderNav exact to="/">
          Home
        </HeaderNav>
        <HeaderNav strict to="/favorites">
          Favorites
        </HeaderNav>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
