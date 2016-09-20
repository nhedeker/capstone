import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';

let users;

const recipes = {
  recipes: [],
  showRecipes: [],
  liked: [],
  order: 'Newest',
  searchTerm: '',
  newRecipe: {
    name: '',
    description: '',
    imgUrl: '',
    ingredients: [''],
    instructtions: ['']
  }
};

const userAuth = {
  email: '',
  password: '',
  username: '',
  loggedIn: cookie.load('loggedIn') || false,
  user: cookie.load('user') || null,
  errors: {
    email: '',
    password: '',
    username: ''
  },
  likes: {}
};

const errors = {
  errorMessage: '',
  showError: false
};

const defaultState = {
  recipes,
  users,
  userAuth,
  errors
};

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, defaultState, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  routerMiddleware(browserHistory)
));

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
