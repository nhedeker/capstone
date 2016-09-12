import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Paper from 'material-ui/Paper';
import React from 'react';
import recipes from '../data/recipes';

const Recipe = React.createClass({
  render() {
    return <Paper className="recipePaper" style={{ borderRadius: '1rem' }}>
      <img className="recipeImg" src={recipes[2].imgUrl} />
      <div className="recipeContentsContainer">
        <h2>{recipes[2].name}</h2>
        <p>{recipes[2].description}</p>
        <h3 className="ingredientsTitle">Ingredients</h3>
        <Ingredients
          className="ingredientList"
          ingredients={recipes[2].ingredients}
        />
        <h3 className="ingredientsTitle">Instructions</h3>
        <Instructions instructions={recipes[2].instructions} />
      </div>
    </Paper>;
  }
});

export default Recipe;
