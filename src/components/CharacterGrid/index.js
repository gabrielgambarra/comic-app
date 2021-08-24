import React from "react";
import CharacterCard from "../CharacterCard";
import { CharacterGridContainer, Pagination } from "./style";

const CharacterGrid = ({
  characters,
  goToPrev,
  goToNext,
  offset,
  totalLength,
  pageLength,
}) => {
  return (
    <>
      <CharacterGridContainer>
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            to={`/details/${char.id}`}
          />
        ))}
      </CharacterGridContainer>

      <Pagination>
        <button onClick={() => goToPrev()} disabled={offset === 0}>
          Prev
        </button>
        {offset + pageLength} of {totalLength}
        <button
          onClick={() => goToNext()}
          disabled={offset === totalLength - 1}
        >
          Next
        </button>
      </Pagination>
    </>
  );
};

export default CharacterGrid;
