import _ from 'lodash';

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_RECIPES': {
      return state;
    }
    case 'RECEIVE_RECIPES': {
      return Object.assign({}, state, {
        recipes: action.recipes,
        showRecipes: action.recipes
      });
    }
    case 'ORDER_BY_NEWEST': {
      const orderedRecipes = _.orderBy(state.recipes, ['createdAt'], ['desc']);

      return Object.assign({}, state, {
        order: 'Newest',
        showRecipes: orderedRecipes
      });
    }
    case 'ORDER_BY_POPULAR': {
      const orderedRecipes = _.orderBy(state.recipes, ['likes'], ['desc']);

      return Object.assign({}, state, {
        order: 'Popular',
        showRecipes: orderedRecipes
      });
    }
    default:
      return state;
  }
};

export default recipes;
