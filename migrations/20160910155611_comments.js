'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.integer('recipes_id')
      .references('id')
      .inTable('recipes')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.text('comment').defaultTo('').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
