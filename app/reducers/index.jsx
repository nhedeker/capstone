import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import users from './users';
import userAuth from './userAuth';

const rootReducer = combineReducers({ recipes, users, userAuth, routing: routerReducer });

export default rootReducer;
