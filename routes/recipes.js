'use strict';
const { camelizeKeys } = require('humps');
const express = require('express');
const knex = require('../knex');

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

module.exports = router;
