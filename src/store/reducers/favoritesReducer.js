import movies from "../../data";

const initialState = {
  favorites: movies,
  displayFavorites: true,
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
