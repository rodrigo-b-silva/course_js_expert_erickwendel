const assert = require('assert')

//keys
const uniqueKey = Symbol('userName')
const user = {}

user['userName'] = 'value for normal Objects'
user[uniqueKey] = 'value for symbol'

// console.log('getting normal object: ', user.userName)
// console.log('getting normal object: ', user[Symbol('userName')])
// console.log('getting normal object: ', user[uniqueKey])

assert.deepStrictEqual(user['userName'], 'value for normal Objects')
//sempre unico em nivel de endereço de memória
assert.deepStrictEqual(user[Symbol('userName')], undefined)
assert.deepStrictEqual(user[uniqueKey], 'value for symbol')

console.log('symbols', Object.getOwnPropertySymbols(user))