import { Link } from "react-router-dom";
import styled from "styled-components";

export const CharacterCardContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  position: relative;

  & img {
    width: 4em;
    height: 100%;
  }

  & h4 {
    margin-left: 0.5em;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  right: 0.5em;
  cursor: pointer;
  background-color: transparent;
  padding: 0.2em;
  border: none;
  font-size: 1em;
  color: ${(props) => props.theme.colors.negative};

  & i {
    font-size: 1em;
  }

  ${CharacterCardContainer} & {
    visibility: hidden;
  }

  ${CharacterCardContainer}:hover & {
    visibility: visible;
  }
`;
