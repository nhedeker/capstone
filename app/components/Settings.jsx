import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';
import users from '../data/users';

const Settings = React.createClass({
  render() {
    const stylePaperBorder = {
      borderRadius: '1rem'
    };

    const styleInputLabel = {
      fontSize: '1.25rem'
    };

    const styleTextFontSize = {
      fontSize: '.925rem',
      marginBottom: '0px',
      color: '#7f7f7f',
      marginTop: '20px'
    };

    return <Paper className="settingsPaper" style={stylePaperBorder}>
      <h1 className="settingsHeader">Settings</h1>
      <div className="settingsContentContainer">
        <TextField
          defaultValue={users[0].email}
          floatingLabelStyle={styleInputLabel}
          floatingLabelText="Email"
          type="email"
        />
        <p style={styleTextFontSize}>Password</p>
        <FlatButton
          label="Change your password..."
          labelStyle={{ textTransform: 'initial' }}
          primary={true}
        />
        <div className="settingsUserNameContainer">
          <TextField
            defaultValue={users[0].firstName}
            fullWidth={true}
            floatingLabelStyle={styleInputLabel}
            floatingLabelText="First Name"
            style={{ marginRight: '3rem' }}
            type="text"
          />
          <TextField
            defaultValue={users[0].lastName}
            floatingLabelStyle={styleInputLabel}
            floatingLabelText="Last Name"
            fullWidth={true}
            type="text"
          />
        </div>
        <p style={styleTextFontSize}>Picture</p>
        <div className="settingsUserImgContainer">
          <img className="settingsUserImg" src="http://images.hellogiggles.com/uploads/2015/03/08/purple-suede.jpg" />
          <FlatButton
            label="Change picture"
            labelPosition="before"
            labelStyle={{ textTransform: 'initial' }}
            primary={true}
          >
            <input type="file" className="settingsUserImgInput" />
          </FlatButton>
        </div>
        <p style={styleTextFontSize}>Username</p>
        <p style={{ display: 'inline-block', marginTop: '.5rem' }}>nameofapp.herokuapp.com/user/</p>
        <TextField
          defaultValue={users[0].username}
          hintText="Username"
          type="text"
        />
        <TextField
          floatingLabelText="About You"
          fullWidth={true}
          multiLine={true}
          rows={2}
        />
        <div className="settingsButtonsContainer">
          <FlatButton
            backgroundColor="#eeeeee"
            hoverColor="#e0e0e0"
            label="Cancel"
            labelStyle={{ textTransform: 'initial' }}
            style={{ marginRight: '1rem' }}
          />
          <FlatButton
            backgroundColor="#00bcd4"
            hoverColor="#4dd0e1"
            label="Save Settings"
            labelStyle={{ color: 'white', textTransform: 'initial' }}
          />
        </div>
      </div>
    </Paper>;
  }
});

export default Settings;
