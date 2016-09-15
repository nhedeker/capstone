import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import React from 'react';
import RecipeGrid from './RecipeGrid';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import users from '../data/users';

const User = React.createClass({
  render() {
    const stylePaperBorder = {
      borderRadius: '1rem',
      paddingRight: '1rem',
      paddingLeft: '1rem'
      // marginTop: '5rem',
      // marginBottom: '5rem'
    };

    const styleRecipeTitle = {
      backgroundColor: '#00bcd4'
    };

    const smallIcon = {
      width: '36px',
      height: '36px'
    };

    const smallIconButton = {
      width: '72px',
      height: '72px',
      padding: '16px'
    };

    return <div className="profileInfoContainer">
      <div className="profileUserInfoContainer">
        <Paper circle={true} style={{ width: '30%' }}>
          <img className="profileUserImg" src="http://www.pil-group.com/uploads/contacts/normal/noimage1.png" />
        </Paper>
        <Paper className="profileUserInfo" style={stylePaperBorder}>
          <div className="profileUserInfoHeader">
            <h1>
              {
                `${users[0].firstName.trim() ? users[0].firstName : ''}
                 ${users[0].lastName.trim() ? users[0].lastName : ''}`
              }
            </h1>
            <Link to={"/settings"}>
              <IconButton
                iconStyle={smallIcon}
                style={smallIconButton}
                tooltip="Settings"
                tooltipPosition="bottom-right"
                touch={true}
              >
                <SettingsIcon color="#b2b1b0" />
              </IconButton>
            </Link>
          </div>
          <p>{`${users[0].bio.trim() ? users[0].bio : ''}`}</p>
        </Paper>
      </div>
      <div className="profileUserRecipeTitleContainer">
        <Paper className="profileUserRecipeTitle" style={styleRecipeTitle}>
          <h1>Recipes</h1>
        </Paper>
      </div>
      <RecipeGrid />
    </div>;
  }
});

export default User;
