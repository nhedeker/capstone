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
    case 'UPDATE_RECIPE_ORDER': {
      return Object.assign({}, state, {
        order: action.order
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
    case 'DISPLAY_RECIPES': {
      let nextRecipes = state.recipes;

      if (state.searchTerm.trim()) {
        nextRecipes = state.recipes.filter((recipe) => {
          return recipe.name.toLowerCase().includes(
            state.searchTerm.toLowerCase()
          );
        });
      }

      if (state.order === 'Popular') {
        nextRecipes = _.orderBy(nextRecipes, ['likes'], ['desc']);
      }
      else if (state.order === 'Newest') {
        nextRecipes = _.orderBy(nextRecipes, ['createdAt'], ['desc']);
      }
      else if (state.order === 'Liked') {
        nextRecipes = nextRecipes.filter((recipe) => {
          return state.liked.includes(recipe.id);
        });
      }
      else if (state.order === 'User') {
        nextRecipes = nextRecipes.filter((recipe) => {
          return recipe.username === action.username;
        });
      }

      return Object.assign({}, state, {
        showRecipes: nextRecipes
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

      const updatedShowRecipes = state.showRecipes.map((recipe) => {
        return Object.assign({}, recipe, {
          liked: state.liked.includes(recipe.id)
        });
      });

      return Object.assign({}, state, {
        recipes: updatedRecipes,
        showRecipes: updatedShowRecipes
      });
    }
    default:
      return state;
  }
};

export default recipes;
