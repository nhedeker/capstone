import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Register = React.createClass({
  render() {
    const { email, password, username, errors } = this.props.userAuth;

    const handleChange = this.props.updateUserAuth;

    const styleUserAuthButtonLabel = {
      textTransform: 'inital'
    };

    const styleUserAuthButton = {
      maxWidth: '30%',
      minWidth: '172.8px'
    };

    const toDisable =
      errors.email.length || errors.password.length ||
      !(email.length && password.length && username.length);

    return <div className="userAuthTabContentContainer">
      <TextField
        errorText={errors.email}
        floatingLabelText="Email"
        name="email"
        onChange={handleChange}
        type="email"
        value={email}
      />
      <TextField
        errorText={errors.password}
        floatingLabelText="Create a Password"
        name="password"
        onChange={handleChange}
        type="password"
        value={password}
      />
      <TextField
        errorText={errors.username}
        floatingLabelText="Create a Username"
        name="username"
        onChange={handleChange}
        type="text"
        value={username}
      />
      <RaisedButton
        className="userAuthButton"
        disabled={toDisable}
        label="Register"
        labelStyle={styleUserAuthButtonLabel}
        primary={true}
        style={styleUserAuthButton}
      />
    </div>;
  }
});

export default Register;
