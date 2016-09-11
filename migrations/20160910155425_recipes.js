'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments();
    table.string('name').defaultTo('').notNullable();
    table.integer('code').unique().notNullable();
    table.integer('likes').defaultTo(0).notNullable();
    table.text('description').defaultTo('').notNullable();
    table.json('ingredients').defaultTo('').notNullable();
    table.text('content').defaultTo('').notNullable();
    table.text('img_url').defaultTo('').notNullable();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes');
};
