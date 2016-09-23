// import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React from 'react';
import RecipeGrid from './RecipeGrid';
// import SettingsIcon from 'material-ui/svg-icons/action/settings';

const User = React.createClass({
  componentWillMount() {
    this.props.getUserPageData(this.props.params.user);
  },

  componentDidMount() {
    window.scrollTo(0, 0);
  },

  componentWillUnmount() {
    this.props.clearUser();
  },

  populateRender() {
    const { user } = this.props.users;
    // const { logoutUser } = this.props;
    // const { loggedIn } = this.props.userAuth;

    // let sameUser = false;
    //
    // if (loggedIn && user.id === this.props.userAuth.user.userId) {
    //   sameUser = true;
    // }

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

    // const smallIcon = {
    //   width: '36px',
    //   height: '36px',
    //   borderRadius: '50%'
    // };
    //
    // const smallIconButton = {
    //   width: '72px',
    //   height: '72px',
    //   borderRadius: '50%',
    //   zIndex: 1
    // };

    const stylePaperImg = {
      width: '30%',
      minWidth: '153px',
      minHeight: '157px'
    };

    let displayName = user.username;

    if (user.firstName) {
      displayName = user.firstName +
        (user.lastName.trim() ? ` ${user.lastName}` : '');
    }

    return <div>
      <div className="profileUserInfoContainer">
        <Paper circle={true} style={stylePaperImg}>
          <img className="profileUserImg" src={user.profileImg} />
        </Paper>
        <Paper className="profileUserInfo" style={stylePaper}>
          <div className="profileUserInfoHeader">
            <h1>
              {displayName}
            </h1>
            {/* <IconMenu
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              iconButtonElement={
                <IconButton
                  iconStyle={smallIcon}
                  style={smallIconButton}
                >
                  <SettingsIcon color="#b2b1b0" />
                </IconButton>
              }
              style={{ display: sameUser ? 'inline-block' : 'none' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <Link className="linkNormalize" to={"/settings"}>
                <MenuItem primaryText="Settings" />
              </Link>
              <MenuItem onTouchTap={logoutUser} primaryText="Logout" />
            </IconMenu> */}
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
