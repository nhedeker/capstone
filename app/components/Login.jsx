import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Login = React.createClass({
  render() {
    const { email, password } = this.props.userAuth;

    const handleEmailUpdate = this.props.updateUserAuthEmail;

    const handlePasswordUpdate = this.props.updateUserAuthPassword;

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
        floatingLabelText="Email"
        onChange={handleEmailUpdate}
        type="text"
        value={email}
      />
      <TextField
        floatingLabelText="Password"
        onChange={handlePasswordUpdate}
        type="password"
        value={password}
      />
      <RaisedButton
        className="userAuthButton"
        disabled={toDisable}
        label="Log In"
        labelStyle={styleUserAuthButtonLabel}
        primary={true}
        style={styleUserAuthButton}
      />
    </div>;
  }
});

export default Login;
