import Favorite from 'material-ui/svg-icons/action/favorite';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import recipes from '../data/recipes';
import users from '../data/users';

const Recipe = React.createClass({
  render() {
    return <Paper className="recipePaper" style={{ borderRadius: '1rem' }}>
      <div className="recipeImgContainer">
        <RaisedButton
          className="recipeImgLikeButton"
          icon={<Favorite />}
          label="like"
          primary={true}
        />
        <img className="recipeImg" src={recipes[1].imgUrl} />
      </div>
      <div className="recipeContentsContainer">
        <h2>
          {`${recipes[1].name} by `}
          <Link to={`/user/${users[0].username}`}>
            {users[0].username}
          </Link>
        </h2>
        <p>{recipes[1].description}</p>
        <h3 className="ingredientsTitle">Ingredients</h3>
        <Ingredients
          className="ingredientList"
          ingredients={recipes[1].ingredients}
        />
        <h3 className="ingredientsTitle">Instructions</h3>
        <Instructions instructions={recipes[1].instructions} />
        <RaisedButton
          className="recipeBottomLikeButton"
          icon={<Favorite />}
          label="like"
          primary={true}
        />
      </div>
    </Paper>;
  }
});

export default Recipe;
