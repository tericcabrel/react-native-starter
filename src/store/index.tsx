import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
//@ts-ignore
import dynamicMiddlewares from "redux-dynamic-middlewares";

import AppReducer from "./app/reducer";

const middlewares = [thunk, dynamicMiddlewares, promise];

const reducers = combineReducers({
  app: AppReducer
});

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export default store;
