import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import rootReducer from "./reducers/Index";

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);
