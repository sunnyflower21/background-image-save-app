import { applyMiddleware, combineReducers, createStore } from "redux";
import { countReducer } from "../reducer/count";
import logger from "redux-logger";

const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
