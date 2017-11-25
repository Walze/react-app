const express = require('express')
const DataBase = require('./users')
const bodyParser = require('body-parser')
const users = new DataBase()
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
  users.allDocs({
    include_docs: true,
    attachments: true
  }).then((docs) => {
    const users = []
    docs.rows.map(row => users.push(row.doc))
    res.send(users)
  })
})

app.get('/kill', (req, res) => {
  users.allDocs().then((result) => {
    return Promise.all(result.rows.map((row) => {
      return users.remove(row.id, row.value.rev)
    }))
  })
  res.send('Done')
})

app.post('/user', (req, res) => users.create(req, res))
