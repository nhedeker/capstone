'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    recipeId: Joi.number()
      .integer()
      .positive()
      .label('Recipe Id')
      .required()
  }
};

module.exports.delete = {
  params: {
    recipeId: Joi.number()
      .integer()
      .positive()
      .label('Recipe Id')
      .required()
  }
};
