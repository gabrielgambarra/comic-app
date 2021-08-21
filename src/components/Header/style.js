import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0;
`;

export const AppName = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.medium};

  &:active,
  &:link,
  &:visited {
    color: #fff;
  }
`;
