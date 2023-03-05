import { createContext, useState } from "react";

const FavoritesContext = createContext({
  Favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler() {}

  function removeFavoriteHandler() {}

  function itemIsFavoriteHandler() {}

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider>{props.children}</FavoritesContext.Provider>
  );
}
