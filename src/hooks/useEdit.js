import { useContext, createContext, useState } from "react";
import { useFavorite } from "./useFavorite";

export const EditContext = createContext(null);

export const EditProvider = ({ children }) => {
  const [editedCharacters, setEditedCharacters] = useState([]);
  const { favorites, setFavorites, isFavorite } = useFavorite();

  const saveEdit = (newItem) => {
    if (isEdited(newItem.id)) {
      const newEdited = editedCharacters.map((item) => {
        if (newItem.id === item.id) {
          return newItem;
        } else {
          return item;
        }
      });
      setEditedCharacters(newEdited);
    } else {
      const newEdited = [...editedCharacters, newItem];
      setEditedCharacters(newEdited);
    }
    reflectEditOnFavorite(newItem);
  };

  const reflectEditOnFavorite = (newItem) => {
    if (isFavorite(newItem.id)) {
      const newFavorites = favorites.map((item) => {
        if (newItem.id === item.id) {
          return newItem;
        } else {
          return item;
        }
      });
      setFavorites(newFavorites);
    }
  };

  const isEdited = (characterId) => {
    return editedCharacters.some((item) => item.id === characterId);
  };

  const getEditedCharacter = (characterId) => {
    const editedIndex = editedCharacters.findIndex(
      (item) => item.id === characterId
    );
    return { ...editedCharacters[editedIndex] };
  };

  return (
    <EditContext.Provider
      value={{
        editedCharacters,
        saveEdit,
        isEdited,
        getEditedCharacter,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export const useEdit = () => {
  const context = useContext(EditContext);
  return context;
};
