'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const app = require('../server');
const knex = require('../knex');
const supertest = require('supertest');

suite('Users', () => {
  // before ENTIRE SUITE is run
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  // before EACH TEST is run
  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /users', (done) => {
    supertest(app)
      .get('/api/users/DelightedDragon')
      .set('Accept', 'application/json')
      .expect(200, {
        bio: 'Nerd extraordinaire who also loves trying new recipes!',
        createdAt: '2016-07-26T14:26:16.000Z',
        email: 'natasha.hedeker@gmail.com',
        firstName: 'Natasha',
        id: 1,
        lastName: 'Hedeker',
        profileImg: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13139033_4012727953550_1598467760858565814_n.jpg?oh=fb5be333f6148d7ce76d0e21cd3e9eac&oe=586FAD5A',
        updatedAt: '2016-07-26T14:26:16.000Z',
        username: 'DelightedDragon'
      })
      .expect('Content-Type', /json/)
      .end(done);
  });
});
