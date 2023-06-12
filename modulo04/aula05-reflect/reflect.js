const assert = require('assert')

//delete property
const withDelete = { user: 'Rodrigo' }
//imperformatico, evitar ao maximo
delete withDelete.user
assert.deepStrictEqual(withDelete.hasOwnProperty('user'), false)

const withReflect = { user: 'Aline' }
Reflect.deleteProperty(withReflect, 'user')
assert.deepStrictEqual(withReflect.hasOwnProperty('user'), false)