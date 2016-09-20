import React from 'react';
import SmallRecipe from './SmallRecipe';

const RecipeGrid = React.createClass({
  mapRecipes() {
    const recipes = this.props.recipes.showRecipes;
    const { showLiked } = this.props.recipes;

    return recipes.map((element, index) => {
      return <SmallRecipe key={index} recipe={element} showLiked={showLiked} />;
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
