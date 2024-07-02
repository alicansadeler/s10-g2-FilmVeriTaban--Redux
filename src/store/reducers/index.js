import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import { favoritesReducer } from "./favoritesReducer";

const reducers = combineReducers({
  movieReducer,
  favoritesReducer,
});
export default reducers;
