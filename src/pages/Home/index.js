import React, { useEffect, useState } from "react";
import { getData } from "../../api";
import CharacterCard from "../../components/Home/CharacterCard";
import { HomeContainer, CharacterGrid } from "./style";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAPIData();
  }, []);

  const getAPIData = async () => {
    const { results } = await getData("/characters", { limit: 9 });
    setCharacters(results);
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
    </HomeContainer>
  );
};

export default Home;
