const express = require('express')
const DataBase = require('./db')
const bodyParser = require('body-parser')
const db = new DataBase
const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const HTTP_SERVER_ERROR = 500
app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }

  return res.status(err.status || HTTP_SERVER_ERROR).render('500')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(3001, () => console.log('Listening on Port 3001'))

app.get('/', (req, res) => {
  db.allDocs({
    include_docs: true,
    attachments: true
  }).then(function (data) {
    const users = []
    data.rows.map(row => {
      users.push(row.doc)
    })
    res.send(users)
  })
})

app.get('/kill', (req, res) => {
  db.allDocs().then(function (result) {
    return Promise.all(result.rows.map(function (row) {
      return db.remove(row.id, row.value.rev)
    }))
  })
  res.send('Done')
})

app.post('/user', (req, res) => {
  let request = req.body
  const response = res
  db.find({
    selector: { email: request.email },
  }).then(function (fetched) {
    if (!fetched.docs.length) {

      db.info().then(function (info) {
        db.put({ ...request, _id: String(++info.doc_count) })
          .then(function () {
            res.send('Added')
          }).catch(function (err) {
            console.log(err)
            res.send(err)
          })
      }).catch(err => response.send(err))

    } else {
      response.status(409).send('Email already exists')
    }
  })
})
