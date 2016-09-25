'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const { checkAuth } = require('../middleware');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/likes');

// eslint-disable-next-line new-cap
const router = express.Router();

// Gets all like entries for a user in the like table
router.get('/likes', checkAuth, (req, res, next) => {
  const { userId } = req.token;

  knex('likes')
    .select('recipe_id')
    .where('user_id', userId)
  .then((rows) => {
    const likes = camelizeKeys(rows);

    res.send(likes);
  })
  .catch((err) => {
    next(err);
  });
});

// Creates new user like entry in likes table
router.post('/likes', checkAuth, ev(validations.post), (req, res, next) => {
  const { recipeId } = req.body;
  const { userId } = req.token;

  const newLike = { recipeId, userId };

  let id;

  const row = decamelizeKeys(newLike);

  knex('likes')
    .insert(row, '*')
  .then((rows) => {
    const like = camelizeKeys(rows[0]);

    id = like.id;

    return knex('recipes')
      .where('id', recipeId)
      .increment('likes', 1);
  })
  .then((rows) => {
    const updatedRecipe = camelizeKeys(rows[0]);

    res.send(updatedRecipe);
  })
  .catch((err) => {
    if (id) {
      knex('likes')
        .where('id', id)
        .first()
        .del();
    }

    next(err);
  });
});

// Deletes a like entry with the like table
// eslint-disable-next-line max-len
router.delete('/likes/:recipeId', checkAuth, ev(validations.delete), (req, res, next) => {
  const { recipeId } = req.params;
  const { userId } = req.token;

  knex('likes')
    .where('recipe_id', recipeId)
    .andWhere('user_id', userId)
    .first()
    .del()
  .then(() => {
    return knex('recipes')
      .where('id', recipeId)
      .decrement('likes', 1);
  })
  .then(() => {
    return res.sendStatus(200);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
