import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';

const AppBarActions = React.createClass({
  handleLoginTouchTap() {
    browserHistory.push('/login');
  },

  handleLogoutTouchTap() {
    return this.props.logoutUser();
  },

  render() {
    const handleOrderChange = this.props.order;
    const handleSearchTermChange = this.props.search;
    const loggedIn = this.props.userAuth.loggedIn;

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
        fullWidth={true}
        hintText="Search"
        onChange={handleSearchTermChange}
        type="text"
        underlineFocusStyle={styleSearchUnderlineFocused}
        underlineStyle={styleSearchUnderline}
        value={this.props.recipes.searchTerm}
      />
      <DropDownMenu
        labelStyle={{ color: appBarThemeColor }}
        onChange={handleOrderChange}
        underlineStyle={styleSearchUnderline}
        value={this.props.recipes.order}
      >
        <MenuItem
          primaryText="Newest"
          value="Newest"
        />
        <MenuItem
          primaryText="Popular"
          value="Popular"
        />
        <MenuItem
          primaryText="Liked"
          style={{ display: this.props.userAuth.loggedIn ? 'block' : 'none' }}
          value="Liked"
        />
      </DropDownMenu>
      <IconMenu
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        iconButtonElement={
          <IconButton>
            <AccountCircle color={appBarThemeColor} />
          </IconButton>
        }
        style={{ display: loggedIn ? 'block' : 'none' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem onTouchTap={this.handleLogoutTouchTap} primaryText="Logout" />
      </IconMenu>
      <FlatButton
        className="appBarButtons"
        hoverColor="#00acc1"
        label="Login/Sign-Up"
        labelStyle={styleLabel}
        onTouchTap={this.handleLoginTouchTap}
        style={{ minWidth: '140px', display: loggedIn ? 'none' : 'block' }}
      />
    </div>;
  }
});

export default AppBarActions;
