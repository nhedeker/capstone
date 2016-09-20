import axios from 'axios';
import cookie from 'react-cookie';
import { push } from 'react-router-redux';

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

export const loggingInUser = () => {
  return {
    type: 'LOGGING_USER'
  };
};

export const loggedInUser = () => {
  return {
    type: 'LOGGED_USER'
  };
};

export const resetLoginForm = () => {
  return {
    type: 'RESET_LOGIN'
  };
};

export const updateLogin = () => {
  return {
    type: 'UPDATE_LOGIN',
    loggedIn: cookie.load('loggedIn')
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(loggingInUser());

    return axios.post('/api/token', { email, password })
      .then((_res) => {
        dispatch(resetLoginForm());
        dispatch(updateLogin());
        dispatch(loggedInUser());
        dispatch(push('/'));
      });
  };
};

export const registeringUser = () => {
  return {
    type: 'REGISTERING_USER'
  };
};

export const registeredUser = () => {
  return {
    type: 'REGISTERED_USER'
  };
};

export const registerUser = (email, password, username) => {
  return (dispatch) => {
    dispatch(registeringUser());

    return axios.post('/api/users', { email, password, username })
      .then((_res) => {
        dispatch(registeredUser());
        dispatch(loginUser(email, password));
      });
  };
};

export const updateUserAuthEmail = (event) => {
  return {
    type: 'UPDATE_USERAUTH_EMAIL',
    email: event.target.value
  };
};

export const updateUserAuthPassword = (event) => {
  return {
    type: 'UPDATE_USERAUTH_PASSWORD',
    password: event.target.value
  };
};

export const updateUserAuthUsername = (event) => {
  return {
    type: 'UPDATE_USERAUTH_USERNAME',
    username: event.target.value
  };
};

export const updateUserAuthErrors = (event) => {
  return {
    type: 'UPDATE_USERAUTH_ERRORS',
    event
  };
};

export const updateRecipeOrder = (event, index, value) => {
  let action;

  if (value === 'Newest') {
    action = 'ORDER_BY_NEWEST';
  }
  else if (value === 'Popular') {
    action = 'ORDER_BY_POPULAR';
  }
  else {
    action = 'ORDER_BY_LIKED';
  }

  return {
    type: action
  };
};
