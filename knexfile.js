'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/Q4_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/Q4_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
