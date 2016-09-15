import Login from './Login';
import Register from './Register';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import React from 'react';

const UserAuth = React.createClass({
  render() {
    const stylePaperBorder = {
      // borderRadius: '1rem',
    };

    return <Paper className="userAuthPaper" style={stylePaperBorder}>
      <Tabs inkBarStyle={{ backgroundColor: 'orange', height: '2.5px' }}>
        <Tab label="Log In" >
          <Login />
        </Tab>
        <Tab label="Register" >
          <Register />
        </Tab>
      </Tabs>
    </Paper>;
  }
});

export default UserAuth;
