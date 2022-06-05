import { combineReducers, legacy_createStore as createStore } from "redux";

import { viewReducer } from "./view/viewReducer";

const mainReducer = combineReducers({
  viewReducer,
});

export const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
