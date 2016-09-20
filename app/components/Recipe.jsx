import Favorite from 'material-ui/svg-icons/action/favorite';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Recipe = React.createClass({
  populateRender() {
    const { recipes } = this.props.recipes;
    const { recipeCode } = this.props.params;
    const recipeI = recipes.findIndex((element) =>
      element.code === recipeCode);

    const recipe = recipes[recipeI];

    const styleLikeButton = {
      display: this.props.userAuth.loggedIn ? 'inline-block' : 'none'
    };

    return <div>
      <div className="recipeImgContainer">
        <RaisedButton
          className="recipeImgLikeButton"
          icon={<Favorite />}
          label="like"
          primary={true}
          style={styleLikeButton}
        />
        <img className="recipeImg" src={recipe.imgUrl} />
      </div>
      <div className="recipeContentsContainer">
        <h2>
          {`${recipe.name} `}
          <Link to={`/user/${recipe.username}`}>
            <img className="recipeProfileImg" src={recipe.profileImg} />
          </Link>
        </h2>
        <p>{recipe.description}</p>
        <h3 className="ingredientsTitle">Ingredients</h3>
        <Ingredients
          className="ingredientList"
          ingredients={recipe.ingredients}
        />
        <h3 className="ingredientsTitle">Instructions</h3>
        <Instructions instructions={recipe.instructions} />
        <RaisedButton
          className="recipeBottomLikeButton"
          icon={<Favorite />}
          label="like"
          primary={true}
          style={styleLikeButton}
        />
      </div>
    </div>;
  },

  render() {
    const stylePaper = {
      borderRadius: '1rem',
      color: '#555555'
    };

    let childElement = null;

    if (this.props.recipes && this.props.recipes.recipes.length) {
      childElement = this.populateRender();
    }

    return <Paper className="recipePaper" style={stylePaper}>
      {childElement}
    </Paper>;
  }
});

export default Recipe;
