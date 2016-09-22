import { combineReducers } from 'redux';
import errors from './errors';
import recipes from './recipes';
import { routerReducer } from 'react-router-redux';
import userAuth from './userAuth';
import users from './users';

const rootReducer = combineReducers(
  {
    recipes,
    errors,
    users,
    userAuth,
    routing: routerReducer
  }
);

export default rootReducer;
