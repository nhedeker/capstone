import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Login = React.createClass({
  render() {
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
        type="text"
      />
      <TextField
        floatingLabelText="Password"
        type="password"
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
