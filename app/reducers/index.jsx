import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import errors from './errors';
import users from './users';
import userAuth from './userAuth';

const rootReducer = combineReducers({ recipes, errors, users, userAuth, routing: routerReducer });

export default rootReducer;
