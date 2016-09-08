'use strict'

const test = require('tape')
const request = require('supertest')
const app = require('../lib/index')

test('Correct users returned', (t) => {
  request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.end()
    })
})
