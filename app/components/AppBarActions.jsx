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
  handleLoginTouchTap() {
    browserHistory.push('/login');
  },

  render() {
    const handleOrderChange = this.props.updateRecipeOrder;
    const handleSearchTermChange = this.props.search;
    const loggedIn = this.props.userAuth.loggedIn;
    const user = this.props.userAuth.user.username;

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
      {/* <Link style={{ display: loggedIn ? 'block' : 'none' }} to={"/newrecipe"}>
        <IconButton>
          <AddCircle color={appBarThemeColor} />
        </IconButton>
      </Link> */}
      <Link
        style={{ display: loggedIn ? 'block' : 'none' }}
        to={`/user/${user}`}
      >
        <IconButton>
          <AccountCircle color={appBarThemeColor} />
        </IconButton>
      </Link>
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
