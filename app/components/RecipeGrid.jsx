import React from 'react';
import SmallRecipe from './SmallRecipe';

const RecipeGrid = React.createClass({
  componentWillMount() {
    this.props.fetchRecipes();
  },

  mapRecipes() {
    const recipes = this.props.recipes.showRecipes;
    const likedRecipes = this.props.recipes.liked;
    const { loggedIn } = this.props.userAuth;

    return recipes.map((element, index) => {
      return React.cloneElement(<SmallRecipe
        key={index}
        liked={likedRecipes}
        recipe={element}
        showLiked={loggedIn}
      />, this.props);
    });
  },

  render() {
    let childElements = null;

    if (this.props.recipes && this.props.recipes.recipes) {
      childElements = this.mapRecipes();
    }

    return <div className="recipeGridContainer">
      {childElements}
    </div>;
  }
});

export default RecipeGrid;
