'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('recipes_tags', (table) => {
    table.increments();
    table.integer('recipe_id')
      .references('id')
      .inTable('recipes')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.integer('tags_id')
      .references('id')
      .inTable('tags')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes_tags');
};
