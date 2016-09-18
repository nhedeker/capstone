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
    type: 'REQUEST_RECIPES',
    requestingRecipes: true
  };
};

export const receiveRecipes = (recipes) => {
  return {
    type: 'RECEIVE_RECIPES',
    recipes,
    requestingRecipes: false
  };
};

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch(requestRecipes());

    return axios.get('/api/recipes')
      .then((res) => {
        return dispatch(receiveRecipes(res.data));
      });
  };
};

export const requestUser = () => {
  return {
    type: 'REQUEST_USER',
    isFetching: true
  };
};

export const receiveUser = (user) => {
  return {
    type: 'RECEIVE_USER',
    user,
    isFetching: false
  };
};

export const fetchUser = (username) => {
  return (dispatch) => {
    dispatch(requestUser());

    return axios.get(`/api/users/${username}`)
      .then((res) => {
        return dispatch(receiveUser(res.data));
      });
  };
};
