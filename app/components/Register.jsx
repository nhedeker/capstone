import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Register = React.createClass({
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
        type="email"
      />
      <TextField
        floatingLabelText="Create a Password"
        type="password"
      />
      <TextField
        floatingLabelText="Create a Username"
        type="text"
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
