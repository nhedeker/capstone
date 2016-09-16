import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import users from './users';

const rootReducer = combineReducers({ recipes, users, routing: routerReducer });

export default rootReducer;
