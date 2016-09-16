'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(() => knex('likes').insert([
      {
        id: 1,
        user_id: 1,
        recipe_id: 1,
        created_at: new Date('2016-08-29 14:26:16 UTC'),
        updated_at: new Date('2016-08-29 14:26:16 UTC')
      }
    ])
  )
  .then(() => {
    return knex.raw(
      "SELECT setval('likes_id_seq', (SELECT MAX(id) FROM likes));"
    );
  });
};
