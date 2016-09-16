// a reducer takes in two things:

// 1. takes in the action (indfo about what happened)
// 2. copy of current state

const users = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES': {
      return state;
    }
    default:
      return state;
  }
};

export default users;
