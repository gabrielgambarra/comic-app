import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import CharacterCard from "../../components/Home/CharacterCard";
import { HomeContainer, CharacterGrid, Pagination } from "./style";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalLength, setTotalLength] = useState(0);
  const [pageLength, setPageLength] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getAPIData();
  }, [offset]);

  const goToPrev = () => {
    setCharacters([]);
    const newOffset = offset - 100;
    setOffset(newOffset);
  };

  const goToNext = () => {
    setCharacters([]);
    let newOffset;
    newOffset = offset + 100;

    if (newOffset < totalLength) {
      setOffset(newOffset);
    }

    if (newOffset > totalLength) {
      newOffset = totalLength - 1;
      setOffset(newOffset);
    }
  };

  const getAPIData = async () => {
    try {
      const { results, number_of_total_results, number_of_page_results } =
        await getData("/characters", {
          offset,
        });
      setTotalLength(number_of_total_results);
      setPageLength(number_of_page_results);
      setCharacters(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContainer>
      <SearchBar onChange={setSearchTerm} value={searchTerm} />
      <CharacterGrid>
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            to={`/details/${char.id}`}
          />
        ))}
      </CharacterGrid>

      {characters.length > 0 && (
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
      )}
    </HomeContainer>
  );
};

export default Home;
