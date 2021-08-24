import React from "react";
import { CharacterCardContainer, FavoriteButton } from "./style";
import { useFavorite } from "../../hooks/useFavorite";

const CharacterCard = ({ character, to }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorite();

  const handleOnClick = (e) => {
    e.preventDefault();
    if (isFavorite(character.id)) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
    renderHeartIcon();
  };

  const renderHeartIcon = () => {
    return isFavorite(character.id) ? (
      <i className="fas fa-heart"></i>
    ) : (
      <i className="far fa-heart"></i>
    );
  };

  return (
    <CharacterCardContainer to={to}>
      <FavoriteButton onClick={(e) => handleOnClick(e)}>
        {renderHeartIcon()}
      </FavoriteButton>
      <img src={character.image.icon_url} alt={`${character.name}`} />
      <h4>{character.name}</h4>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
