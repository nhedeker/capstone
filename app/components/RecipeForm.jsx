import AddCircle from 'material-ui/svg-icons/content/add-circle';
import Divider from 'material-ui/Divider';
import GetApp from 'material-ui/svg-icons/action/get-app';
import IconButton from 'material-ui/IconButton';
import Image from 'material-ui/svg-icons/image/image';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import RemoveCirlce from 'material-ui/svg-icons/content/remove-circle';
import TextField from 'material-ui/TextField';

const RecipeForm = React.createClass({
  render() {
    return <Paper className="recipePaper" style={{ borderRadius: '1rem' }}>
      <div className="recipeFormContainer">
        <h1>New Recipe</h1>
        <Divider />
        <div className="recipeFormContentContainer">
          <h2 className="recipeFormDetailsHeader">Recipe Details</h2>
          <TextField
            floatingLabelText="Recipe Name"
            fullWidth={true}
            // errorText="This field is required"
          />
          <TextField
            floatingLabelText="Recipe Description"
            fullWidth={true}
            multiLine={true}
            rows={2}
          />
          <RaisedButton
            className="recipeFormInputButton"
            icon={<Image />}
            label="Choose a Recipe Image"
            primary={true}
          >
            <input className="recipeFormInputFileButton" type="file" />
          </RaisedButton>
          <h2>Ingredients</h2>
          <TextField
            hintText="ingredient"
          />
          <IconButton
            tooltip="add ingredient"
            tooltipPosition="bottom-right"
            touch={true}
          >
            <AddCircle />
          </IconButton>
          <h2>Instructions</h2>
          <TextField
            hintText="instruction"
          />
          <IconButton
            tooltip="add instruction"
            tooltipPosition="bottom-right"
            touch={true}
          >
            <AddCircle />
          </IconButton>
          <br />
          <div className="recipeFormSubmitButtonContainer">
            <RaisedButton
              icon={<GetApp />}
              label="Submit"
              primary={true}
            />
          </div>
        </div>
      </div>
    </Paper>;
  }
});

export default RecipeForm;
