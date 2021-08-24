import React from "react";
import { CharacterCardContainer } from "./style";

const CharacterCard = ({ character, to }) => {
  return (
    <CharacterCardContainer to={to}>
      <img src={character.image.icon_url} alt={`${character.name}`} />
      <h4>{character.name}</h4>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
