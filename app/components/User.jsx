import Paper from 'material-ui/Paper';
import React from 'react';
import RecipeGrid from './RecipeGrid';

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
