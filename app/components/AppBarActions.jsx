import { Link, browserHistory } from 'react-router';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import TextField from 'material-ui/TextField';

const AppBarActions = React.createClass({
  render() {
    const appBarThemeColor = 'white';

    const styleLabel = {
      color: appBarThemeColor
    };

    const styleSearchUnderlineFocused = {
      borderColor: appBarThemeColor
    };

    const styleSearchUnderline = {
      borderColor: '#fafafa'
    };

    return <div className="appBarButtonsContainer">
      <TextField
        fullWidth={true} hintText="Search"
        underlineFocusStyle={styleSearchUnderlineFocused}
        underlineStyle={styleSearchUnderline}
      />
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
      <Link to={"/newrecipe"}>
        <IconButton>
          <AddCircle color={appBarThemeColor} />
        </IconButton>
      </Link>
      <Link to={"/user/temp"}>
        <IconButton>
          <AccountCircle color={appBarThemeColor} />
        </IconButton>
      </Link>
      <FlatButton
        className="appBarButtons"
        hoverColor="#00acc1"
        label="Login/Sign-Up"
        labelStyle={styleLabel}
        onTouchTap={() => { browserHistory.push('/login') }}
        style={{ minWidth: '140px' }}
      />
    </div>;
  }
});

export default AppBarActions;
