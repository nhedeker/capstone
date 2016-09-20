import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import RecipeGrid from './RecipeGrid';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const User = React.createClass({
  componentWillMount() {
    this.props.getUserPageData(this.props.params.user);
  },

  populateRender() {
    const { user } = this.props.users;
    const { logoutUser } = this.props;
    const { loggedIn } = this.props.userAuth;

    const stylePaper = {
      borderRadius: '1rem',
      paddingRight: '1rem',
      paddingLeft: '1rem',
      color: '#555555'
    };

    const styleRecipeTitle = {
      backgroundColor: '#00bcd4',
      color: '#424242'
    };

    const smallIcon = {
      width: '36px',
      height: '36px',
      borderRadius: '50%'
    };

    const smallIconButton = {
      width: '72px',
      height: '72px',
      borderRadius: '50%',
      zIndex: 1
    };

    let displayName = user.username;

    if (user.firstName) {
      displayName = user.firstName +
        (user.lastName.trim() ? ` ${user.lastName}` : '');
    }

    return <div>
      <div className="profileUserInfoContainer">
        <Paper circle={true} style={{ width: '30%' }}>
          <img className="profileUserImg" src="http://www.pil-group.com/uploads/contacts/normal/noimage1.png" />
        </Paper>
        <Paper className="profileUserInfo" style={stylePaper}>
          <div className="profileUserInfoHeader">
            <h1>
              {displayName}
            </h1>
            <IconMenu
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              iconButtonElement={
                <IconButton
                  iconStyle={smallIcon}
                  style={smallIconButton}
                >
                  <SettingsIcon color="#b2b1b0" />
                </IconButton>
              }
              style={{ display: loggedIn ? 'inline-block' : 'none' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <Link className="linkNormalize" to={"/settings"}>
                <MenuItem primaryText="Settings" />
              </Link>
              <MenuItem onTouchTap={logoutUser} primaryText="Logout" />
            </IconMenu>
          </div>
          <p>{`${user.bio.trim() ? user.bio : ''}`}</p>
        </Paper>
      </div>
      <div className="profileUserRecipeTitleContainer">
        <Paper className="profileUserRecipeTitle" style={styleRecipeTitle}>
          <h1>Recipes</h1>
        </Paper>
      </div>
      {React.cloneElement(<RecipeGrid />, this.props)}
    </div>;
  },

  render() {
    const { users } = this.props;

    let childElement = null;

    if (users && users.user && !users.isFetching) {
      childElement = this.populateRender();
    }

    return <div className="profileInfoContainer">
      {childElement}
    </div>;
  }
});

export default User;
