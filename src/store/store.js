import { legacy_createStore } from "redux";
import reducer from "./reducers/movieReducer";
import reducers from "./reducers";

export const myStore = legacy_createStore(reducers);
