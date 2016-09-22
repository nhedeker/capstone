'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/users');

// eslint-disable-next-line new-cap
const router = express.Router();

// Creates new user in users table
router.post('/users', (req, res, next) => {
  const { email, password, username } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Email has already been registered');
      }

      return knex('users')
      .select(knex.raw('1=1'))
      .where('username', username)
      .first();
    })
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Username is taken');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const newUser = { email, hashedPassword, username };

      const row = decamelizeKeys(newUser);

      return knex('users').insert(row, '*');
    })
    .then((rows) => {
      const user = camelizeKeys(rows[0]);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/users/password', (req, res, next) => {
  const { userId } = req.token;
  const { password } = req.body;

  bcrypt.hash(password, 12)
  .then((hashedPassword) => {
    return knex('users')
      .where('id', userId)
      .update('hashed_password', hashedPassword);
  })
  .then(() => {
    res.sendStatus(200);
  })
  .catch((err) => {
    next(err);
  });
});

// router.patch('/users', (req, res, next) => {
//   const { userId } = req.token;
//   const {
//     username,
//     bio,
//     firstName,
//     lastName,
//     profileImg
//   } = req.body;
//
//   knex('users')
//     .select('id')
//     .where('username', username)
//     .first()
//     .then((row) => {
//       if (row.id !== userId) {
//         throw boom.create(409, 'Username already taken');
//       }
//
//       const updatedUser = {};
//
//       if (username) {
//         updatedUser.username = username;
//       }
//
//       if (bio) {
//         updatedUser.bio = bio;
//       }
//
//       if (firstName) {
//         updatedUser.firstName = firstName;
//       }
//
//       if (lastName) {
//         updatedUser.lastName = lastName;
//       }
//
//       const updatedRow = decamelizeKeys(updatedUser);
//
//       return knex('users')
//         .where('id', userId)
//         .update(updatedRow)
//         .returning('*');
//     })
//     .then((rows) => {
//       const user = camelizeKeys(rows[0]);
//
//       delete user.hashedPassword;
//
//       res.send(user);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

router.delete('/users', (req, res, next) => {
  const { userId } = req.token;

  knex('users')
    .where('id', userId)
    .del()
  .then(() => {
    res.clearCookie('accessToken');
    res.clearCookie('loggedIn');
    res.sendStatus(200);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/users/:username', (req, res, next) => {
  const { username } = req.params;

  knex('users')
    .where('username', username)
    .first()
    .then((row) => {
      const user = camelizeKeys(row);

      delete user.hashedPassword;

      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
