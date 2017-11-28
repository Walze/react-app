const express = require('express'),
  Table = require('./Table'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  cookieSession = require('cookie-session'),
  users = new Table('users'),
  app = express()

// Error Handler
const HTTP_SERVER_ERROR = 500
app.use(function (err, req, res, next) {
  if (res.headersSent) return next(err)

  return res.status(err.status || HTTP_SERVER_ERROR).render('500')
})

// Cors enabler
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', 'true')

  next()
})

// Plugins && Middleware
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieSession({
  name: 'session',
  keys: ['vaporwave'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// Listener
app.listen(3001, () => console.log('Listening on Port 3001'))


// Route Handler


//// Deletes all docs
app.get('/kill/:everyone?', (req, res) => {
  req.session = null
  if (req.params.everyone) {
    users.all(docs => {
      return Promise.all(docs.rows.map(row => {
        return users.remove(row.id, row.value.rev)
      }))
    })
    res.send('Everyone deleted')
  }
  res.send('Sessions deleted')
})

app.get('/', (req, res) => {
  const allUsers = []

  users.all(docs => {
    docs.rows.map(row => allUsers.push(row.doc))
    res.send([
      allUsers,
      req.session,
    ])
  })
})

app.get('/session', (req, res) => res.send(req.session.user))

app.post('/signup', (req, res) => users.create(req.body, res, 'email'))

app.post('/login', (req, res) => {
  users.fetch(req.body, 'email', (fetched) => {
    if (!req.session.user) {
      if (!fetched.docs.length)
        res.status(404).send('Email Not Found')

      req.session.user = {}
      const sess = req.session.user
      const user = fetched.docs[0]

      sess._id = user._id
      sess.username = user.username
      sess.email = user.email

      req.session.save()
      res.send({
        msg: 'Logged',
        session: req.session.user
      })

    } else
      res.status(409).send({
        msg: 'Already Logged',
        session: req.session.user
      })
  })
})



