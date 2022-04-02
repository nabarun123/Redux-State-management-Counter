import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allreducers = combineReducers({
  // also known as root reducer
  counter: counterReducer,
  isLogged: loggedReducer
});
export default allreducers;
