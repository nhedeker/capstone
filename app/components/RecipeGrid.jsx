import React from 'react';
import SmallRecipe from './SmallRecipe';
import recipes from '../data/recipes';
import users from '../data/users';

const RecipeGrid = React.createClass({
  render() {
    const childElements = recipes.map((element, index) => {
      return <SmallRecipe key={index} recipe={element} users={users} />
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
