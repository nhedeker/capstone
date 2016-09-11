'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('likes', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.integer('recipe_id')
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('likes');
};
