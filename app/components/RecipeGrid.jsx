import Favorite from 'material-ui/svg-icons/action/favorite';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import React from 'react';
import recipes from '../data/recipes';
import users from '../data/users';

const RecipeGrid = React.createClass({
  render() {
    const styleLikeButton = {
      position: 'absolute',
      background: '#00bcd4',
      borderRadius: '50%',
      marginTop: '.25rem',
      marginLeft: '.25rem'
    };

    const styleLikeButtonIcon = {
      color: 'white'
    };

    const stylePaperBorder = {
      borderRadius: '1rem'
    };

    const styleMoreFlatButton = {
      borderBottomLeftRadius: '1rem',
      borderBottomRightRadius: '1rem',
      marginBottom: '0px',
      // position: 'absolute'
    };

    const childElements = recipes.map((element, index) => {
      return <Paper
        className="smallRecipePaper"
        key={index}
        style={stylePaperBorder}
      >
        <div className="recipeImgContainer">
          <IconButton
            iconStyle={styleLikeButtonIcon}
            style={styleLikeButton}
          >
            <Favorite />
          </IconButton>
          <img className="recipeImg" src={element.imgUrl} />
        </div>
        <div className="smallRecipeContentsContainer">
          <h3>
            {`${element.name} `}
          </h3>
          <p>{element.description}</p>
          <Link to={`/user/${users[0].username}`}>
            <img
              className="gridProfileImg"
              src={"./images/default_profile.png"}
            />
          </Link>
        </div>
        <FlatButton
          className="seeMoreButton"
          label="See More"
          primary={true}
          style={styleMoreFlatButton}
        />
      </Paper>;
    });

    return <div className="recipeGridContainer">
      {childElements}
      {childElements}
      {childElements}
      {childElements}
      {childElements}
      {childElements}
    </div>;
  }
});

export default RecipeGrid;
