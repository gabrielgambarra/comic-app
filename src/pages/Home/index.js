import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import { HomeContainer } from "./style";
import SearchBar from "../../components/Home/SearchBar";
import CharacterGrid from "../../components/CharacterGrid";
import EmptyList from "../../components/EmptyList";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [totalLength, setTotalLength] = useState(0);
  const [pageLength, setPageLength] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    offset === 0 ? getAPIData(true) : setOffset(0);
  };

  const onRemoveFilter = () => {
    setCharacters([]);
    setSearchTerm("");
    setFilterApplied(false);
    offset === 0 ? getAPIData() : setOffset(0);
  };

  const buildFilterParams = (filter) => {
    return filter
      ? { offset, filter: `name:${searchTerm}`, field_list: "name,image,id" }
      : { offset, field_list: "name,image,id" };
  };

  const getAPIData = async (filter) => {
    setIsLoading(true);
    try {
      const { results, number_of_total_results, number_of_page_results } =
        await getData("/characters", buildFilterParams(filter));
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

      {totalLength < 1 && !isLoading && <EmptyList />}

      {characters.length > 0 && (
        <CharacterGrid
          characters={characters}
          goToPrev={goToPrev}
          goToNext={goToNext}
          offset={offset}
          totalLength={totalLength}
          pageLength={pageLength}
          pagination={true}
        />
      )}
    </HomeContainer>
  );
};

export default Home;
