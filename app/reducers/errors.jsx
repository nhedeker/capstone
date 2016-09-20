const errors = (state = [], action) => {
  switch (action.type) {
    case 'CLOSE_ERROR_MESSAGE': {
      return Object.assign({}, state, {
        showError: false
      });
    }
    case 'UPDATE_ERROR_MESSAGE': {
      return Object.assign({}, state, {
        showError: true,
        errorMessage: `Error ${action.newErrorMessage}`
      });
    }
    default:
      return state;
  }
};

export default errors;
