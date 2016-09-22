import Favorite from 'material-ui/svg-icons/action/favorite';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Recipe = React.createClass({
  componentDidMount() {
    window.scrollTo(0, 0);
  },

  handleLikeTouchTap(event) {
    event.preventDefault();
    const { recipes } = this.props.recipes;
    const { recipeCode } = this.props.params;
    const recipeI = recipes.findIndex((element) =>
      element.code === recipeCode);

    const recipe = recipes[recipeI];

    this.props.changeLikeStatus(recipe);
  },

  populateRender() {
    const { recipes } = this.props.recipes;
    const { recipeCode } = this.props.params;
    const recipeI = recipes.findIndex((element) =>
      element.code === recipeCode);

    const recipe = recipes[recipeI];

    const buttonLabelColor = 'white';
    let backgroundColor = '#00bcd4';
    let buttonLabel = 'like';

    if (recipe.liked) {
      backgroundColor = '#ff1744';
      buttonLabel = 'unlike';
    }

    const styleLikeButton = {
      display: this.props.userAuth.loggedIn ? 'inline-block' : 'none'
    };

    return <div>
      <div className="recipeImgContainer">
        <RaisedButton
          backgroundColor={backgroundColor}
          className="recipeImgLikeButton"
          icon={<Favorite />}
          label={buttonLabel}
          labelColor={buttonLabelColor}
          onTouchTap={this.handleLikeTouchTap}
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
          backgroundColor={backgroundColor}
          className="recipeBottomLikeButton"
          icon={<Favorite />}
          label={buttonLabel}
          labelColor={buttonLabelColor}
          onTouchTap={this.handleLikeTouchTap}
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
