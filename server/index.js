const express = require('express'),
  Table = require('./TableMaker'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  MemoryStore = require('memorystore')(session),
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
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With,content-type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', 'true')

  next()
})

// Plugins && Middleware
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('trust proxy', 1)
app.use(session({
  secret: 'vaporwave',
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  resave: false,
  saveUninitialized: true,
  httpOnly: false,
  cookie: { secure: false }
}))

// Listener
app.listen(3001, () => console.log('Listening on Port 3001'))


// Route Handler
app.get('/', (req, res) => {
  const allUsers = []

  users.all(docs => {
    docs.rows.map(row => allUsers.push(row.doc))
    res.send(allUsers)
  })
})

app.get('/kill', (req, res) => {
  users.all(docs => {
    return Promise.all(docs.rows.map(row => {
      return users.remove(row.id, row.value.rev)
    }))
  })
  res.send('Done')
})

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
      sess.name = user.name
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

