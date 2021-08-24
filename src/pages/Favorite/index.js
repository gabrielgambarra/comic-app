import React from "react";
import CharacterGrid from "../../components/CharacterGrid";
import { FavoriteContainer } from "./style";
import { useFavorite } from "../../hooks/useFavorite";

const Favorite = () => {
  const { favorites } = useFavorite();

  return (
    <FavoriteContainer>
      {favorites.length > 0 && (
        <CharacterGrid characters={favorites} pagination={false} />
      )}
    </FavoriteContainer>
  );
};

export default Favorite;
