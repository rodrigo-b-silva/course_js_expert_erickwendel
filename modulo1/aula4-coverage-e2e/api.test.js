const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('./api')
const assert = require('assert')

describe('API Suite test', () => {
  describe('/contact', () => {
    it("should request the contact page and return http status 200", async () => {
      const response = await request(app)
        .get('/contact')
        .expect(200)
      assert.deepStrictEqual(response.text, 'Contact us page')
    })
  })

  describe('/hello', () => {
    it("should request the hello page and return http status 200", async () => {
      const response = await request(app)
        .get('/hello')
        .expect(200)
      assert.deepStrictEqual(response.text, 'Hello World')
    })
  })

  describe('/login', () => {
    it("should login successfully on the login route and return http status 200", async () => {
      const response = await request(app)
        .post('/login')
        .send({ username: 'rodrigo', password: '123' })
        .expect(401)
      assert.deepStrictEqual(response.text, 'Logging has successfully')
    })
    it("should unauthorized a request when requesting it using wrong credentials and return http status 401", async () => {
      const response = await request(app)
        .post('/login')
        .send({ username: 'teste', password: '123' })
        .expect(401)
      assert.deepStrictEqual(response.text, 'Logging failed')
    })
  })
})