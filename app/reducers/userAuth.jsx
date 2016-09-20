import Joi from 'joi';

const userAuth = (state = [], action) => {
  switch (action.type) {
    case 'RESET_LOGIN': {
      return Object.assign({}, state, {
        email: '',
        password: '',
        username: '',
        errors: {
          email: '',
          password: '',
          username: ''
        }
      });
    }
    case 'UPDATE_LOGIN': {
      const newUser = Object.assign({}, state.user, {
        userId: action.userId,
        username: action.username
      });

      return Object.assign({}, state, {
        loggedIn: action.loggedIn,
        user: newUser
      });
    }
    case 'UPDATE_USERAUTH_DATA': {
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    }
    case 'UPDATE_USERAUTH_ERRORS': {
      const { name } = action.event.target;

      const nextErrors = Object.assign({}, state.errors);

      if (!state[name] || !state[name].length) {
        nextErrors[name] = `${name} is required`;

        return Object.assign({}, state, { errors: nextErrors });
      }
      else if (name === 'email') {
        if (state.email.length < 3) {
          nextErrors.email = 'email must contain at least 3 characters';

          return Object.assign({}, state, { errors: nextErrors });
        }
        else if (!state.email.includes('@')) {
          nextErrors.email = 'email must be a valid email address';

          return Object.assign({}, state, { errors: nextErrors });
        }
        nextErrors.email = '';

        return Object.assign({}, state, { errors: nextErrors });
      }
      else if (name === 'password') {
        if (state.password.length < 8) {
          nextErrors.password = 'password must conatin at least 8 characters';

          return Object.assign({}, state, { errors: nextErrors });
        }
        nextErrors.password = '';

        return Object.assign({}, state, { errors: nextErrors });
      }
      else if (name === 'username') {
        if (state.username.length < 3) {
          nextErrors.username = 'username must contain at least 3 characters';

          return Object.assign({}, state, { errors: nextErrors });
        }

        nextErrors.username = '';

        return Object.assign({}, state, { errors: nextErrors });
      }

      return state;
    }
    default:
      return state;
  }
};

export default userAuth;
