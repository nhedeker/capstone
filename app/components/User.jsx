import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import RecipeGrid from './RecipeGrid';
import recipes from '../data/recipes';
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

    return <div className="profileInfoContainer">
      <div className="profileUserInfoContainer">
        <Paper circle={true} style={{ width: '30%' }}>
          <img style={{ minWidth: '256.5px', minHeight:'247px', width: '100%', height: '100%', borderRadius: '50%', margin: '0px', position: 'relative' }} src="http://www.pil-group.com/uploads/contacts/normal/noimage1.png" />
        </Paper>
        <Paper style={stylePaperBorder}>
          <h1>
            {
              `${users[0].firstName.trim() ? users[0].firstName : ''}
               ${users[0].lastName.trim() ? users[0].lastName : ''}`
            }
          </h1>
          <p>{`${users[0].bio.trim() ? users[0].bio : ''}`}</p>
        </Paper>
      </div>
      <RecipeGrid />
    </div>;
  }
});

export default User;
