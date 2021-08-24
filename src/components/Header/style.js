import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 130px;
`;

export const AppName = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.medium};

  &:active,
  &:link,
  &:visited {
    color: #fff;
  }
`;

export const HeaderNav = styled(NavLink)`
  font-size: ${(props) => props.theme.fontSizes.default};
  margin: 0 0.5em;

  &:active,
  &:link,
  &:visited {
    color: #fff;
  }

  &:hover {
    border-bottom: 2px solid #fff;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }
`;
