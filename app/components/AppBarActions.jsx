import { Link, browserHistory } from 'react-router';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import TextField from 'material-ui/TextField';

const AppBarActions = React.createClass({
  render() {
    return <div className="AppBarButtonsContainer">
      <TextField hintText="Search" />
      <DropDownMenu value={"temp"}>
        <MenuItem
          primaryText="Newest"
          value={"newest"}
        />
        <MenuItem
          primaryText="Popular"
          value={"popular"}
        />
        <MenuItem
          primaryText="Liked"
          value={"liked"}
        />
      </DropDownMenu>
      <IconButton>
        <CheckBox />
      </IconButton>
      <Link to={"/newrecipe"}>
        <IconButton>
          <AddCircle />
        </IconButton>
      </Link>
      <Link to={"/usertemp"}>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Link>
      <FlatButton
        label="Login/Sign-Up"
        onTouchTap={() => { browserHistory.push('/login') }}
      />
    </div>;
  }
});

export default AppBarActions;
