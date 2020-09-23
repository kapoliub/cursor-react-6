import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers/postsReducer";

const store = createStore(
  combineReducers({
    postsPage: postsReducer,
  })
);

export default store;
