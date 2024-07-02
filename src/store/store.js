import { legacy_createStore } from "redux";
import reducer from "./reducers/movieReducer";

export const myStore = legacy_createStore(reducer);
