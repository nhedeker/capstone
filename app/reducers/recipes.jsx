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
    case 'FILTER_BY_LIKES': {
      const filteredRecipes = state.showRecipes.filter((recipe) => {
        return state.liked.includes(recipe.id);
      });

      return Object.assign({}, state, {
        order: 'Liked',
        showRecipes: filteredRecipes
      });
    }
    case 'UPDATE_SEARCH_TERM': {
      return Object.assign({}, state, {
        searchTerm: action.searchValue
      });
    }
    case 'FILTER_BY_USER': {
      const filteredRecipes = state.recipes.filter((recipe) => {
        return recipe.username === action.username;
      });

      return Object.assign({}, state, {
        showRecipes: filteredRecipes
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

      if (state.order === 'Popular') {
        filteredRecipes = _.orderBy(filteredRecipes, ['likes'], ['desc']);
      }
      else if (state.order === 'Newest') {
        filteredRecipes = _.orderBy(filteredRecipes, ['createdAt'], ['desc']);
      }
      else if (state.order === 'Liked') {
        filteredRecipes = filteredRecipes.filter((recipe) => {
          return state.liked.includes(recipe.id);
        });
      }

      return Object.assign({}, state, {
        showRecipes: filteredRecipes
      });
    }
    case 'UPDATE_LIKED': {
      const likes = _.map(action.liked, (element) => {
        return element.recipeId;
      });

      return Object.assign({}, state, {
        liked: likes
      });
    }
    case 'MAP_LIKED_DATA': {
      const updatedRecipes = state.recipes.map((recipe) => {
        return Object.assign({}, recipe, {
          liked: state.liked.includes(recipe.id)
        });
      });

      return Object.assign({}, state, {
        recipes: updatedRecipes,
        showRecipes: updatedRecipes
      });
    }
    default:
      return state;
  }
};

export default recipes;
