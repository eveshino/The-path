import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteContent) => {},
  removeFavorite: (contentId) => {},
  itemIsFavorite: (contentId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteContent) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteContent);
    });
  }

  function removeFavoriteHandler(contentId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((content) => content.id !== contentId);
    });
  }

  function itemIsFavoriteHandler(contentId) {
    return userFavorites.some((content) => content.id === contentId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
