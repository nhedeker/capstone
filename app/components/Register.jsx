import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Register = React.createClass({
  render() {
    const { email, password, username, errors } = this.props.userAuth;

    const handleEmailUpdate = this.props.updateUserAuthEmail;

    const handlePasswordUpdate = this.props.updateUserAuthPassword;

    const handleUsernameUpdate = this.props.updateUserAuthUsername;

    const handleBlur = this.props.updateUserAuthErrors;

    const styleUserAuthButtonLabel = {
      textTransform: 'inital'
    };

    const styleUserAuthButton = {
      maxWidth: '30%',
      minWidth: '172.8px'
    };

    let toDisable = true;

    return <div className="userAuthTabContentContainer">
      <TextField
        errorText={errors.email}
        floatingLabelText="Email"
        name="email"
        onBlur={handleBlur}
        onChange={handleEmailUpdate}
        type="email"
        value={email}
      />
      <TextField
        errorText={errors.password}
        floatingLabelText="Create a Password"
        name="password"
        onBlur={handleBlur}
        onChange={handlePasswordUpdate}
        type="password"
        value={password}
      />
      <TextField
        errorText={errors.username}
        floatingLabelText="Create a Username"
        name="username"
        onBlur={handleBlur}
        onChange={handleUsernameUpdate}
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
