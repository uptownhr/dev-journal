const Nuxt = require('nuxt'),
    config = require('./nuxt.config.js')


// We instantiate Nuxt.js with the options
const nuxt = new Nuxt(config)

const built = (!config.dev ? Promise.resolve() : nuxt.build())

// No build in production
module.exports = function(req, res, next){
    built
        .then( () => {
            nuxt.render(req, res, next)
        })
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
}