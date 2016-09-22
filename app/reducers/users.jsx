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
    default:
      return state;
  }
};

export default users;
