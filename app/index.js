"use strict";
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()

// Body parser, to access req.body
app.use(bodyParser.json())

// Sessions to create req.session
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}))

// POST /api/login to log in the user and add him to the req.session.authUser
app.post('/api/login', function (req, res) {
    if (req.body.username === 'demo' && req.body.password === 'demo') {
        req.session.current_user = { username: 'demo' }
        return res.json({ username: 'demo' })
    }
    res.status(401).json({ error: 'Bad credentials' })
})

// POST /api/logout to log out the user and remove it from the req.session
app.post('/api/logout', function (req, res) {
    delete req.session.current_user
    res.json({ ok: true })
})

app.get('/test', (req, res) => {
    res.json('from server')
})

app.listen(3000)


const nuxt = require('./nuxt-middleware.js')

app.use(nuxt)
