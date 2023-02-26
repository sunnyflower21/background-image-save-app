import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "../reducer/count";
import logger from "redux-logger";
import { favoriteReducer } from "../reducer/favoriteReducer";

const rootReducer = combineReducers({
  count: countReducer,
  favorite: favoriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
