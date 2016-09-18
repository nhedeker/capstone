'use strict';

const Joi = require('joi');

module.exports.patch = {
  body: {
    recipeId: Joi.number()
      .label('RecipeId')
      .integer()
      .positive()
      .required(),
    name: Joi.string()
      .label('Recipe Name')
      .max(255)
      .min(3)
      .required()
      .trim(),
    description: Joi.string()
      .label('Recipe Description')
      .max(255)
      .min(8)
      .required()
      .trim(),
    ingredients: Joi.array()
      .label('Ingredients')
      .required()
      .min(1)
      .items(
        Joi.string()
          .label('Ingredient')
          .required()
          .trim()
      ),
    instructions: Joi.array()
      .label('Instructions')
      .required()
      .min(1)
      .items(
        Joi.string()
          .label('Instruction')
          .required()
          .trim()
      ),
    img: Joi.any()
      .label('Recipe Image')
      .required()
  }
};
