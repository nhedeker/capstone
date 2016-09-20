import { Tab, Tabs } from 'material-ui/Tabs';
import Login from './Login';
import Paper from 'material-ui/Paper';
import React from 'react';
import Register from './Register';

const UserAuth = React.createClass({
  render() {
    return <Paper className="userAuthPaper">
      <Tabs inkBarStyle={{ backgroundColor: 'orange', height: '2.5px' }}>
        <Tab label="Log In" >
          {/* <Login /> */}
          {React.cloneElement(<Login />, this.props)}
        </Tab>
        <Tab label="Register" >
          {/* <Register /> */}
          {React.cloneElement(<Register />, this.props)}
        </Tab>
      </Tabs>
    </Paper>;
  }
});

export default UserAuth;
