import Joi from 'joi';

const userAuth = (state = [], action) => {
  switch (action.type) {
    case 'RESET_LOGIN': {
      return Object.assign({}, state, {
        email: '',
        password: '',
        username: ''
      });
    }
    case 'UPDATE_LOGIN': {
      return Object.assign({}, state, {
        loggedIn: action.loggedIn
      });
    }
    case 'UPDATE_USERAUTH_EMAIL': {
      return Object.assign({}, state, {
        email: action.email
      });
    }
    case 'UPDATE_USERAUTH_PASSWORD': {
      return Object.assign({}, state, {
        password: action.password
      });
    }
    case 'UPDATE_USERAUTH_USERNAME': {
      return Object.assign({}, state, {
        username: action.username
      });
    }
    case 'UPDATE_USERAUTH_ERRORS': {
      const schema = Joi.object({
        email: Joi.string().trim().max(255).email().min(3).required(),
        password: Joi.string().trim().max(255).min(8).required(),
        username: Joi.string().trim().max(255).min(3)
      });

      const { name, value } = action.event.target;
      console.log(name);
      const nextErrors = Object.assign({}, state.errors);
      console.log(nextErrors);
      const result = Joi.validate({ [name]: value }, schema);
      console.log(result);

      if (result.error) {
        for (const detail of result.error.details) {
          nextErrors[detail.path] = detail.message;
        }

        return Object.assign({}, state, { errors: nextErrors });
      }

      delete nextErrors[name];

      return Object.assign({}, state, { errors: nextErrors });
    }
    default:
      return state;
  }
};

export default userAuth;
