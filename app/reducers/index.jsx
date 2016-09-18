import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import users from './users';
import recipesApi from './recipesApi';

const rootReducer = combineReducers({ recipes, users, recipesApi, routing: routerReducer });

export default rootReducer;
