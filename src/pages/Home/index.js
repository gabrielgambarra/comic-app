import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import { HomeContainer, Pagination } from "./style";
import SearchBar from "../../components/Home/SearchBar";
import CharacterGrid from "../../components/CharacterGrid";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [totalLength, setTotalLength] = useState(0);
  const [pageLength, setPageLength] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSearch = () => {
    setCharacters([]);
    setFilterApplied(true);
    offset === 0 ? getAPIData() : setOffset(0);
  };

  const onRemoveFilter = () => {
    setCharacters([]);
    setSearchTerm("");
    setFilterApplied(false);
    offset === 0 ? getAPIData() : setOffset(0);
  };

  const buildFilterParams = () => {
    return searchTerm !== "" && filterApplied !== true
      ? { offset, filter: `name:${searchTerm}` }
      : { offset };
  };

  const getAPIData = async () => {
    setIsLoading(true);
    try {
      const { results, number_of_total_results, number_of_page_results } =
        await getData("/characters", buildFilterParams());
      setTotalLength(number_of_total_results);
      setPageLength(number_of_page_results);
      setCharacters(results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleLoading = () => {
    return isLoading ? <span>Loading...</span> : null;
  };

  return (
    <HomeContainer>
      <SearchBar
        onChange={setSearchTerm}
        value={searchTerm}
        search={() => handleSearch()}
        filterApplied={filterApplied}
        removeFilter={() => onRemoveFilter()}
      />

      {handleLoading()}

      {characters.length > 0 && (
        <>
          <CharacterGrid characters={characters} />

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
      )}
    </HomeContainer>
  );
};

export default Home;
