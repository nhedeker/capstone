// a reducer takes in two things:

// 1. takes in the action (indfo about what happened)
// 2. copy of current state

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_RECIPES': {
      return state;
    }
    case 'RECEIVE_RECIPES': {
      const newThing = Object.assign({}, state, {
        recipesApi: action.recipes
      });

      return newThing;
    }
    default:
      return state;
  }
};

export default recipes;
