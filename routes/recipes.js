'use strict';
const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/recipes');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/recipes', (req, res, next) => {
  knex('recipes')
    .innerJoin('users', 'users.id', 'recipes.user_id')
    .select(
      'users.id',
      'users.profile_img',
      'users.username',
      'recipes.id',
      'recipes.likes',
      'recipes.name',
      'recipes.code',
      'recipes.created_at',
      'recipes.description',
      'recipes.img_url',
      'recipes.ingredients',
      'recipes.instructions'
    )
    .orderBy('recipes.created_at', 'desc')
    .then((rows) => {
      const recipes = camelizeKeys(rows);

      for (const recipe of recipes) {
        recipe.instructions = JSON.parse(recipe.instructions);
      }

      res.send(recipes);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/recipes', (req, res, next) => {
  const { userId } = req.token;
  const { name, description, imgUrl } = req.body;
  let { ingredients, instructions } = req.body;

  const code =
    Date.now().toString(36) +
    Math.random().toString(36).substr(2, 16);

  ingredients = JSON.stringify(ingredients);
  instructions = JSON.stringify(instructions);

  const newRecipe = {
    code,
    name,
    description,
    ingredients,
    instructions,
    userId
  };

  const newRow = decamelizeKeys(newRecipe);

  knex('/recipes')
    .insert(newRow, '*')
    .then((row) => {
      const recipeId = row[0].recipe_id;

      return knex('recipes')
        .innerJoin('users', 'users.id', 'recipes.user_id')
        .where('recipe_id', recipeId)
        .select(
          'users.id',
          'users.profile_img',
          'users.username',
          'recipes.id',
          'recipes.likes',
          'recipes.name',
          'recipes.code',
          'recipes.created_at',
          'recipes.description',
          'recipes.img_url',
          'recipes.ingredients',
          'recipes.instructions'
        )
        .first();
    })
    .then((row) => {
      const recipe = camelizeKeys(row);

      res.send(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/recipes', (req, res, next) => {
  const { userId } = req.token;
  const { name, description, recipeId } = req.body;
  let { ingredients, instructions } = req.body;

  knex('recipes')
    .where('user_id', userId)
    .andWhere('id', recipeId)
    .then((exists) => {
      if (!exists) {
        throw boom.create(401, 'Unauthorized to edit this recipe');
      }

      ingredients = JSON.stringify(ingredients);
      instructions = JSON.stringify(instructions);

      const updatedRecipe = {
        name,
        description,
        ingredients,
        instructions
      };

      return knex('recipes')
        .where('id', recipeId)
        .update(updatedRecipe)
        .returning('*');
    })
    .then((rows) => {
      const recipe = camelizeKeys(rows[0]);

      res.send(recipe);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
