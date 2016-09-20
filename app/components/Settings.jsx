import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import React from 'react';
import TextField from 'material-ui/TextField';
import users from '../data/users';
import { withRouter } from 'react-router';

const Settings = React.createClass({
  componentWillMount() {
    if (!this.props.userAuth.loggedIn) {
      this.props.router.push('/notfound');
    }
  },

  render() {
    const stylePaper = {
      borderRadius: '1rem',
      color: '#555555'
    };

    const styleInputLabel = {
      fontSize: '1.25rem'
    };

    const styleButtonLabelTransform = {
      textTransform: 'initial'
    };

    return <Paper className="settingsPaper" style={stylePaper}>
      <h1 className="settingsHeader">Settings</h1>
      <div className="settingsContentContainer">
        <TextField
          defaultValue={users[0].email}
          floatingLabelStyle={styleInputLabel}
          floatingLabelText="Email"
          type="email"
        />
        <p className="settingsText">Password</p>
        <FlatButton
          label="Change your password..."
          labelStyle={styleButtonLabelTransform}
          primary={true}
        />
        <div className="settingsUserNameContainer">
          <TextField
            defaultValue={users[0].firstName}
            floatingLabelStyle={styleInputLabel}
            floatingLabelText="First Name"
            fullWidth={true}
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
        <p className="settingsText">Picture</p>
        <div className="settingsUserImgContainer">
          <img className="settingsUserImg" src="http://images.hellogiggles.com/uploads/2015/03/08/purple-suede.jpg" />
          <FlatButton
            label="Change picture"
            labelPosition="before"
            labelStyle={styleButtonLabelTransform}
            primary={true}
          >
            <input className="inputImgFileButton" type="file" />
          </FlatButton>
        </div>
        <p className="settingsText">Username</p>
        <p className="settingsUserName">nameofapp.herokuapp.com/user/</p>
        <TextField
          defaultValue={users[0].username}
          hintText="Username"
          type="text"
        />
        <TextField
          floatingLabelStyle={styleInputLabel}
          floatingLabelText="About You"
          fullWidth={true}
          multiLine={true}
          rows={2}
          type="text"
        />
        <div className="settingsButtonsContainer">
          <Link to={"/user/temp"}>
            <FlatButton
              backgroundColor="#eeeeee"
              hoverColor="#e0e0e0"
              label="Cancel"
              labelStyle={styleButtonLabelTransform}
              style={{ marginRight: '1rem' }}
            />
          </Link>
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

export default withRouter(Settings);
