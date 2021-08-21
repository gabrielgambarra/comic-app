import { Link } from "react-router-dom";
import styled from "styled-components";

export const CharacterCardContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;

  & img {
    width: 4em;
    height: 100%;
  }

  & h4 {
    margin-left: 0.5em;
  }
`;
