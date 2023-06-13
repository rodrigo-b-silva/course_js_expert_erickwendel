const rewiremock = require('rewiremock/node')
const { deepStrictEqual } = require('assert')

//poderia estar em outro arquivo
const dbData = [{ name: 'Maria' }, { name: 'Jose' }]
class MockDatabase {
  connect = () => this
  find = async (query) => dbData
}

rewiremock(() => require('./../src/util/database')).with(MockDatabase)

; (async () => {
  {
    const expected = [{ name: 'MARIA' }, { name: 'JOSE' }]
    rewiremock.enable()
    const UserFactory = require('../src/factory/userFactory')
    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find()
    deepStrictEqual(result, expected)
    rewiremock.disable()
  }
  {
    const expected = [{ name: 'RODRIGO BARBOSA' }]
    const UserFactory = require('../src/factory/userFactory')
    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find()
    deepStrictEqual(result, expected)
  }
})()