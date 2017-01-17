"use strict";
const bodyParser = require('body-parser'),
  app = require('express')(),
  co = require('bluebird').coroutine

//initialize app dbs
require('./db')(app)

// Body parser, to access req.body
app.use(bodyParser.json())


const User = require('./models/User.js'),
  Post = require('./models/Post.js')

// POST /api/login to log in the user and add him to the req.session.authUser
app.post('/api/login', co( function *(req, res) {
  console.log('wtf')
  let user = yield User.findOne({email: req.body.email})
  console.log(req.body, user)
  if (user && user.password == req.body.password) {
    req.session.current_user = user
    return res.json( user )
  }

  res.status(401).json({ error: 'Bad credentials' })
}) )

// POST /api/logout to log out the user and remove it from the req.session
app.post('/api/logout', function (req, res) {
  delete req.session.current_user
  res.json({ ok: true })
})


app.post('/api/post/create', co( function *(req,res){
  let post = yield new Post( req.body ).save()

  if (req.body.parent_id) {
    console.log(req.body)
    let parent = yield Post.findOne({_id: req.body.parent_id})
    console.log(parent)
    parent.children.addToSet(post._id)
    parent.save()
  }

  res.json(post)
}))

app.get('/api/posts', co( function *(req,res) {
  let posts = yield Post.find()

  res.json(posts)
}))


app.get('/test', (req, res) => {
  res.json('from server')
})

app.listen(3000)


const nuxt = require('./nuxt-middleware.js')

app.use(nuxt)
