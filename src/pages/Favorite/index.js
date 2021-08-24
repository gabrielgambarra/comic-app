import React from "react";
import CharacterGrid from "../../components/CharacterGrid";
import { FavoriteContainer } from "./style";
import { useFavorite } from "../../hooks/useFavorite";
import EmptyList from "../../components/EmptyList";

const Favorite = () => {
  const { favorites } = useFavorite();

  return (
    <FavoriteContainer>
      {favorites.length > 0 ? (
        <CharacterGrid characters={favorites} pagination={false} />
      ) : (
        <EmptyList />
      )}
    </FavoriteContainer>
  );
};

export default Favorite;
