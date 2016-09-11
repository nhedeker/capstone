'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').unique().notNullable();
    table.specificType('hased_password', 'char(60)');
    table.string('first_name').defaultTo('').notNullable();
    table.string('last_name').defaultTo('').notNullable();
    table.text('bio').defaultTo('').notNullable();
    table.string('username').unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
