const users = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_USER': {
      return state;
    }
    case 'RECEIVE_USER': {
      return Object.assign({}, state, {
        user: action.user
      });
    }
    case 'CLEAR_USER': {
      return Object.assign({}, state, {
        user: null
      });
    }
    default:
      return state;
  }
};

export default users;
