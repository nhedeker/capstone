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
    const { newRecipe } = this.props.recipes;

    const stylePaper = {
      borderRadius: '1rem',
      color: '#555555'
    };

    const styleIconButton = {
      color: '#00bcd4'
    };

    return <Paper className="recipePaper" style={stylePaper}>
      <div className="recipeFormContainer">
        <h1>New Recipe</h1>
        <Divider />
        <div className="recipeFormContentContainer">
          <h2 className="recipeFormDetailsHeader">Recipe Details</h2>
          <TextField
            floatingLabelText="Recipe Name"
            fullWidth={true}
            // errorText="This field is required"
            type="text"
          />
          <TextField
            floatingLabelText="Recipe Description"
            fullWidth={true}
            multiLine={true}
            rows={2}
            type="text"
          />
          <TextField
            floatingLabelText="Recipe Image Url"
            fullWidth={true}
            // errorText="This field is required"
            type="url"
          />
          <h2>Ingredients</h2>
          <div>
            <TextField
              hintText="ingredient"
              type="text"
            />
            <IconButton
              iconStyle={styleIconButton}
              tooltip="add ingredient"
              tooltipPosition="bottom-right"
              touch={true}
            >
              <AddCircle />
            </IconButton>
          </div>
          <h2>Instructions</h2>
          <div>
            <TextField
              hintText="instruction"
              type="text"
            />
            <IconButton
              iconStyle={styleIconButton}
              tooltip="add instruction"
              tooltipPosition="bottom-right"
              touch={true}
            >
              <AddCircle />
            </IconButton>
          </div>
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
