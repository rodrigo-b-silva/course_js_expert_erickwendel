const assert = require('assert')

//usado na maioria das vezes para listas de valores unicos
const arr1 = ['0', '1', '2']
const arr2 = ['2', '0', '3']
const arr3 = arr1.concat(arr2)
// console.log(arr3)
assert.deepStrictEqual(arr3.sort(), ['0', '0', '1', '2', '2', '3'])

const set = new Set()
arr1.map(item => set.add(item))
arr2.map(item => set.add(item))
// console.log('Set com items de array', set)
assert.deepStrictEqual(Array.from(set), ['0', '1', '2', '3'])
assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), ['0', '1', '2', '3'])

// console.log('set.keys', set.keys())
// console.log('set.values', set.values()) //só existe por conta do Map

//no array comum, para saber se um item exite
// [].indexOf('1') !== -1 ou [0].includes(0)
assert.ok(set.has('3'))

// mesmo teoria do Map, mas vc empre trabalha a lista toda,
// não tem get, entao vc pode saber se o item esta ou não no array e é isso.
// Na documentação tem exempos sobre como fazer uma interceção, saber o que tem
// em uma lista e não tem na outra e assim por diante

//tem nos dois arrays
const users1 = new Set([
  'rodrigo', 'ana', 'erick'
])
const users2 = new Set([
  'maria', 'ana', 'bia'
])
const intersection = new Set([...users1].filter(user => users2.has(user)))
assert.deepStrictEqual(Array.from(intersection), ['ana'])

const difference = new Set([...users1].filter(user => !users2.has(user)))
assert.deepStrictEqual(Array.from(difference), ['rodrigo', 'erick'])