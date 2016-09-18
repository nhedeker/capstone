import axios from 'axios';

// increment like
export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
};

export const requestRecipes = () => {
  return {
    type: 'REQUEST_RECIPES'
  };
};

export const receiveRecipes = (recipes) => {
  return {
    type: 'RECEIVE_RECIPES',
    recipes
  };
};

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch(requestRecipes());

    return axios.get('/api/recipes')
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((data) => {
        console.log(data);
        return dispatch(receiveRecipes(data));
      });
  };
};
