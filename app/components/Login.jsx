import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Login = React.createClass({
  componentDidMount() {
    window.scrollTo(0, 0);
  },

  handleTouchTap() {
    this.props.loginUser(this.props.userAuth.email,
      this.props.userAuth.password);
  },

  render() {
    const { email, password, errors } = this.props.userAuth;

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
      !(email.length && password.length);

    return <div className="userAuthTabContentContainer">
      <TextField
        errorText={errors.email}
        floatingLabelText="Email"
        name="email"
        onChange={handleChange}
        type="text"
        value={email}
      />
      <TextField
        errorText={errors.password}
        floatingLabelText="Password"
        name="password"
        onChange={handleChange}
        type="password"
        value={password}
      />
      <RaisedButton
        className="userAuthButton"
        disabled={toDisable}
        label="Log In"
        labelStyle={styleUserAuthButtonLabel}
        onTouchTap={this.handleTouchTap}
        primary={true}
        style={styleUserAuthButton}
      />
    </div>;
  }
});

export default Login;
