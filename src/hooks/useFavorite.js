import { useContext, createContext, useState } from "react";

export const FavoriteContext = createContext(null);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (newItem) => {
    const newFavorites = [...favorites, newItem];
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (characterId) => {
    const newFavorites = favorites.filter((item) => item.id !== characterId);
    setFavorites(newFavorites);
  };

  const isFavorite = (characterId) => {
    return favorites.some((item) => item.id === characterId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        setFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  return context;
};
