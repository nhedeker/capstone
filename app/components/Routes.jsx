import { IndexRoute, Route, Router } from 'react-router';
import App from 'components/App';
import NotFound from 'components/NotFound';
import React from 'react';
import Recipe from 'components/Recipe';
import RecipeGrid from 'components/RecipeGrid';
import User from 'components/User';
import UserAuth from 'components/UserAuth';
import { history } from '../store';

const Routes = React.createClass({
  render() {
    return <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={RecipeGrid} />
        <Route component={Recipe} path="recipe/:recipeCode" />
        <Route component={UserAuth} path="login" />
        <Route component={User} path="user/:user" />
        <Route component={NotFound} path="*" />
      </Route>
    </Router>;
  }
});

export default Routes;
