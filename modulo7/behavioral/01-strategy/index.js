import ContextStrategy from "./src/base/contextStrategy.js"
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js"
import PostgresDBStrategy from "./src/strategies/postgresStrategy.js"

const postgresConnectionString = 'postgres://rodrigo:rodrigo@localhost:5432/heroes'
const postgresContext = new ContextStrategy(new PostgresDBStrategy(postgresConnectionString))
const result = await postgresContext.connect()

const mongodbConnectionString = 'mongodb://rodrigo:rodrigo@localhost:27017/heroes'
const mongodbContext = new ContextStrategy(new MongoDBStrategy(mongodbConnectionString))
await mongodbContext.connect()

const data = [{
  name: 'RodrigoSilva',
  type: 'transaction'
}, {
  name: 'MariaSilva',
  type: 'activityLog'
}]

const contextTypes = {
  transaction: postgresContext,
  activityLog: mongodbContext
}

for (const { type, name } of data) {
  const context = contextTypes[type]
  await context.create({ name: name + Date.now() })
  console.log(type, context.dbStrategy.contructor.name)
  console.log(await context.read())
}