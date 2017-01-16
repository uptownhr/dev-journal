const mongoose = require('mongoose'),
  session = require('express-session')

const config = {
  mongo: {
    host: 'mongo',
    port: '27017',
    db: 'dev-journal'
  },
  redis: {
    host: 'redis',
    port: '6379',
    secret: 'asdf'
  }

}
mongoose.Promise = global.Promise

mongoose.connect(`${config.mongo.host}:${config.mongo.port}/${config.mongo.db}`)

mongoose.connection.on('error', (err) => {
  console.log('Mongodb connection error', err)
  process.exit(1)
})

mongoose.connection.on('connected', () => {
  // listen on config port, default 3000
  console.log('mongo connected')
})

const RedisStore = require('connect-redis')(session)


module.exports = function(app) {
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.redis.secret,
    store: new RedisStore({ url: `redis://${config.redis.host}:${config.redis.port}` })
  }))
}