const express = require('express')
const Table = require('./TableMaker')
const bodyParser = require('body-parser')
const users = new Table('users')
const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const HTTP_SERVER_ERROR = 500
app.use(function (err, req, res, next) {
  if (res.headersSent) return next(err)

  return res.status(err.status || HTTP_SERVER_ERROR).render('500')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(3001, () => console.log('Listening on Port 3001'))

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

app.post('/user', (req, res) => users.create(req.body, res, 'email'))
