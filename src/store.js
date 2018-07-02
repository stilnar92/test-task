import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import Thunk from "redux-thunk";

import { auth } from "./modules/auth/reducers";
import { agentReducer as agent } from "./modules/agent/reducers/agent";
import { subAgentsReducer as subAgents } from "./modules/agent/reducers/subAgents";
import { Api } from "./api";
import { API_URL } from "./constants";

const reducer = combineReducers({
  auth,
  agent,
  subAgents
});

export function configureStore(rootInitialState = {}) {
  const api = new Api(API_URL);

  const middlewares = [Thunk.withExtraArgument({ api })];

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducer,
    rootInitialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}
