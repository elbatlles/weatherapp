import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { city } from "../reducers/city";
const initialState = {
  city: "Granollers,esp"
};

const conposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  city,
  initialState,
  conposeEnhancers(applyMiddleware(thunk))
);
