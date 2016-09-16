import Favorite from 'material-ui/svg-icons/action/favorite';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const Recipe = React.createClass({
  render() {
    let { recipeCode } = this.props.params;

    recipeCode = Number.parseInt(recipeCode);

    // if (Number.isNaN(recipeCode)) {
    //   this.props.router.push('/NotFound');
    // }

    const recipeI = this.props.recipes.findIndex((element) =>
      element.code === recipeCode);

    const recipe = this.props.recipes[recipeI];

    const userI = this.props.users.findIndex((element) =>
      element.username === recipe.userUsername);

    console.log(userI);
    const user = this.props.users[userI];

    const stylePaper = {
      borderRadius: '1rem',
      color: '#555555'
    };

    return <Paper className="recipePaper" style={stylePaper}>
      <div className="recipeImgContainer">
        <RaisedButton
          className="recipeImgLikeButton"
          icon={<Favorite />}
          label="like"
          primary={true}
        />
        <img className="recipeImg" src={recipe.imgUrl} />
      </div>
      <div className="recipeContentsContainer">
        <h2>
          {`${recipe.name} `}
          <Link to={`/user/${user.username}`}>
            <img src={"./images/default_profile.png"} />
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
        />
      </div>
    </Paper>;
  }
});

export default Recipe;
