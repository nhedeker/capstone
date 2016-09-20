import _ from 'lodash';

// eslint-disable-next-line max-statements
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
      const orderedRecipes = _.orderBy(
        state.showRecipes, ['createdAt'], ['desc']
      );

      return Object.assign({}, state, {
        order: 'Newest',
        showRecipes: orderedRecipes
      });
    }
    case 'ORDER_BY_POPULAR': {
      const orderedRecipes = _.orderBy(state.showRecipes, ['likes'], ['desc']);

      return Object.assign({}, state, {
        order: 'Popular',
        showRecipes: orderedRecipes
      });
    }
    case 'UPDATE_SEARCH_TERM': {
      return Object.assign({}, state, {
        searchTerm: action.searchValue
      });
    }
    case 'FILTER_BY_SEARCH': {
      if (!state.searchTerm.trim()) {
        return Object.assign({}, state, {
          showRecipes: state.recipes
        });
      }

      let filteredRecipes = state.recipes.filter((recipe) => {
        return recipe.description.includes(state.searchTerm) ||
          recipe.name.includes(state.searchTerm);
      });

      let order;

      if (state.order === 'Popular') {
        order = 'likes';
      }
      else if (state.order === 'Newest') {
        order = 'newest';
      }
      else {
        // change order to likes somehow!
      }

      filteredRecipes = _.orderBy(filteredRecipes, [order], ['desc']);

      return Object.assign({}, state, {
        showRecipes: filteredRecipes
      });
    }
    default:
      return state;
  }
};

export default recipes;
