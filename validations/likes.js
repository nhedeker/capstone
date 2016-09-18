'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    userId: Joi.number()
      .integer()
      .positive()
      .label('User Id')
      .required(),
    recipeId: Joi.number()
      .integer()
      .positive()
      .label('Recipe Id')
      .required()
  }
};

module.exports.delete = {
  body: {
    userId: Joi.number()
      .integer()
      .positive()
      .label('User Id')
      .required(),
    recipeId: Joi.number()
      .integer()
      .positive()
      .label('Recipe Id')
      .required()
  }
};
