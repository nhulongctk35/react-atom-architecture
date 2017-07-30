import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (!Config.PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
  compose;
/* eslint-enable */

const configureStore = (reducer) => {
  const initialState = Ma();
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];

  return createStore(reducer, initialState, composeEnhancers);
}

export default configureStore;
