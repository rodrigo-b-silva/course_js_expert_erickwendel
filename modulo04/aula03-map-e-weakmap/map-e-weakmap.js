const assert = require('assert')
const myMap = new Map();

//pode ter qualquer coisa como chave
myMap
  .set(1, 'one')
  .set('Rodrigo', { text: 'ola' })
  .set(true, () => 'hello')

//usando um construtor
const myWithConstructor = new Map([
  ['1', 'str1'],
  [2, 'num1'],
  [true, 'bool'],
])

// console.log('myMap', myMap)
// console.log('myMap.get(1)', myMap.get(1))
assert.deepStrictEqual(myMap.get(1), 'one')
assert.deepStrictEqual(myMap.get('Rodrigo'), { text: 'ola' })
assert.deepStrictEqual(myMap.get(true)(), 'hello')

const onlyReferenceWorks = { id: 1 }
myMap.set(onlyReferenceWorks, { name: 'RodrigoBarbosa' })
assert.deepStrictEqual(myMap.get({ id: 1 }), undefined)
assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: 'RodrigoBarbosa' })

//utilitarios
//-No Objeto seria Object.keys({ a: 1 }).length
assert.deepStrictEqual(myMap.size, 4)

//para verificar se um item existe no objeto
// item.key => se não existe = undefined
// if() => coerção implica para boolean e retorna false
// O jeito certo em Object é ({ name: 'Rodrigo' }).hasOwnProperty('name')
assert.ok(myMap.has(onlyReferenceWorks))

//para remover um item de objeto
// delete item.id => é imperformatico para o javascript
assert.ok(myMap.delete(onlyReferenceWorks)) //ira retornar true ou false

//No Object, não da para iterar em objetos diretamente
//tem que transformar com o Object.entries(item)
//Ja no Map é iteravel:
// for (const [key, value] of myMap) {
//   console.log({ key, value })
// }

//Object é inseguro, pois dependendo do nome da chave pode substituir um comportamento padrao
// ex: ({}).toString() === '[object Object]'
//({ toString: () => 'Hello' }).toString() === 'Hello' //true
//qualque chave pode colidir com as propriedades herdadas de Object, como:
//constructor, toString, valueOf e etc

//Não tem como limpar um Object sem reassina-lo, ou passar todas suas keys para undefined
myMap.clear()
assert.deepStrictEqual([...myMap.keys()], [])
