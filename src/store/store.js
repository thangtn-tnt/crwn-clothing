import { compose, createStore, applyMiddleware } from "redux";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  // console.log("type: ", action.type);
  // console.log("payload: ", action.payload);
  // console.log("currentState: ", store.getState());

  next(action);
  // console.log("next state: ", store.getState());
};

const middleware = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancers);
