/*eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const middlewares = [];

middlewares.push(thunk);

const env = process.env.NODE_ENV;

let store = null;

if (env === 'development') {
  middlewares.push(createLogger({ collapsed: true }));
  store = createStore(
    reducers, composeWithDevTools(applyMiddleware(...middlewares))
  );
} else {
  store = createStore(
    reducers, applyMiddleware(...middlewares)
  );
}


export default store;
