const assert = require('assert')

function* calculation(arg1, arg2) {
  yield arg1 * arg2
}

function* main() {
  yield 'hello'
  yield '-'
  yield 'world'
  yield* calculation(2, 2)
}

const generator = main()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

assert.deepStrictEqual(generator.next(), { value: 'hello', done: false })
assert.deepStrictEqual(generator.next(), { value: '-', done: false })
assert.deepStrictEqual(generator.next(), { value: 'world', done: false })
assert.deepStrictEqual(generator.next(), { value: 4, done: false })
assert.deepStrictEqual(generator.next(), { value: undefined, done: true })

assert.deepStrictEqual(Array.from(main()), [ 'hello', '-', 'world', 4 ])
assert.deepStrictEqual([...main()], [ 'hello', '-', 'world', 4 ])