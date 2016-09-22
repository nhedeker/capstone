import axios from 'axios';
import cookie from 'react-cookie';
import { push } from 'react-router-redux';

export const handleCloseError = () => {
  return {
    type: 'CLOSE_ERROR_MESSAGE'
  };
};

export const updateErrorMessage = (newError) => {
  return {
    type: 'UPDATE_ERROR_MESSAGE',
    newErrorMessage: newError.response || newError.message
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

export const mapLikedRecipeData = () => {
  return {
    type: 'MAP_LIKED_DATA'
  };
};

export const updateLikedRecipes = (data) => {
  return {
    type: 'UPDATE_LIKED',
    liked: data
  };
};

export const getLikedRecipes = () => {
  return (dispatch) => {
    return axios.get('/api/likes')
      .then((res) => {
        return dispatch(updateLikedRecipes(res.data));
      })
      .then(() => {
        return dispatch(mapLikedRecipeData());
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
      });
  };
};

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch(requestRecipes());

    return axios.get('/api/recipes')
      .then((res) => {
        return dispatch(receiveRecipes(res.data));
      })
      .then(() => {
        if (cookie.load('loggedIn')) {
          return dispatch(getLikedRecipes());
        }
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
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
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
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
    loggedIn: cookie.load('loggedIn'),
    userId: cookie.load('userId'),
    username: cookie.load('username')
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

        return dispatch(getLikedRecipes());
      })
      .then(() => {
        dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
      });
  };
};

export const updateRecipeOrder = (event) => {
  let action = 'NULL';

  if (event.target.textContent === 'Newest') {
    action = 'ORDER_BY_NEWEST';
  }
  else if (event.target.textContent === 'Popular') {
    action = 'ORDER_BY_POPULAR';
  }
  else if (event.target.textContent === 'Liked') {
    action = 'FILTER_BY_LIKES';
  }

  return {
    type: action
  };
};

export const goToMain = () => {
  return (dispatch) => {
    dispatch(fetchRecipes())
      .then(() => {
        const event = {
          target: {
            textContent: 'Newest'
          }
        };

        dispatch(updateRecipeOrder(event));
        dispatch(push('/'));
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return axios.delete('/api/token')
      .then((_res) => {
        dispatch(updateLogin());
        dispatch(goToMain());
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
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
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
      });
  };
};

export const updateUserAuthData = (event) => {
  return {
    type: 'UPDATE_USERAUTH_DATA',
    name: event.target.name,
    value: event.target.value
  };
};

export const updateUserAuthErrors = (event) => {
  return {
    type: 'UPDATE_USERAUTH_ERRORS',
    event
  };
};

export const updateUserAuth = (event) => {
  return (dispatch) => {
    dispatch(updateUserAuthData(event));
    dispatch(updateUserAuthErrors(event));
  };
};

export const updateSearchTerm = (searchValue) => {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchValue
  };
};

export const filterBySearch = () => {
  return {
    type: 'FILTER_BY_SEARCH'
  };
};

export const search = (event) => {
  return (dispatch) => {
    dispatch(updateSearchTerm(event.target.value));
    dispatch(filterBySearch());
  };
};

export const showUserRecipes = (username) => {
  return {
    type: 'FILTER_BY_USER',
    username
  };
};

export const getUserPageData = (username) => {
  return (dispatch) => {
    dispatch(fetchRecipes())
      .then(() => {
        return dispatch(fetchUser(username));
      })
      .then(() => {
        dispatch(showUserRecipes(username));
      });
  };
};

// export const goToUserPage = (username) => {
//   return (dispatch) => {
//     dispatch(getUserPageData(username))
//     .then(() => {
//       dispatch(push(`/user/${username}`));
//     });
//   };
// };

export const likeRecipe = (recipeId) => {
  return (dispatch) => {
    return axios.post('/api/likes', { recipeId })
      .then((_res) => {
        dispatch(getLikedRecipes());
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
      });
  };
};

export const unlikeRecipe = (recipeId) => {
  return (dispatch) => {
    return axios.delete(`/api/likes/${recipeId}`)
      .then((_res) => {
        dispatch(getLikedRecipes());
      })
      .catch((err) => {
        dispatch(updateErrorMessage(err));
      });
  };
};

export const changeLikeStatus = (recipe) => {
  if (recipe.liked) {
    return (dispatch) => {
      dispatch(unlikeRecipe(recipe.id));
    };
  }

  return (dispatch) => {
    dispatch(likeRecipe(recipe.id));
  };
};
