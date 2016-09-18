import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import users from './data/users';

const recipes = { requestingRecipes: true };

const defaultState = {
  recipes,
  users
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (fn) => fn
);

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, defaultState, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
