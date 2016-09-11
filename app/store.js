import { compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import recipes from './data/recipes';
import rootReducer from './reducers/index';
import { syncHistoryWithStore } from 'react-router-redux';

const defaultState = {
  recipes
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (fn) => fn
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
