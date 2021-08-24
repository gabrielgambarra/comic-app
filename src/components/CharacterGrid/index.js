import React from "react";
import CharacterCard from "../CharacterCard";
import { CharacterGridContainer } from "./style";

const CharacterGrid = ({ characters }) => {
  return (
    <CharacterGridContainer>
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          character={char}
          to={`/details/${char.id}`}
        />
      ))}
    </CharacterGridContainer>
  );
};

export default CharacterGrid;
