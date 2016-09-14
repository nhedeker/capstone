import { IndexRoute, Route, Router } from 'react-router';
import App from 'components/App';
import EditRecipeForm from 'components/EditRecipeForm';
import NewRecipeForm from 'components/NewRecipeForm';
import NotFound from 'components/NotFound';
import React from 'react';
import Recipe from 'components/Recipe';
import RecipeGrid from 'components/RecipeGrid';
import Settings from 'components/Settings';
import User from 'components/User';
import UserAuth from 'components/UserAuth';
import { history } from '../store';

const Routes = React.createClass({
  render() {
    return <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={RecipeGrid} />
        <Route component={Recipe} path="recipe/:recipe" />
        <Route component={EditRecipeForm} path="recipe/:recipe/edit" />
        <Route component={NewRecipeForm} path="newrecipe" />
        <Route component={UserAuth} path="login" />
        <Route component={Settings} path="settings" />
        <Route component={User} path="user/:user" />
        <Route component={NotFound} path="*" />
        {/* make sure to add just /pin to NotFound */}
      </Route>
    </Router>;
  }
});

export default Routes;
