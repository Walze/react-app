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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(3001, () => console.log('Listening on Port 3001'))

app.get('/', (req, res) => {
  db.allDocs().then((doc) => {
    res.send(doc.rows)
  })
})

app.post('/user', (req, res) => {
  const data = req.body;
  const response = res;
  db.find({
    selector: { email: data.email },
  }).then(function (res) {

    console.log(res.docs);

    if (!res.docs.length) {

      db.put(data).then(function (response) {
        console.log(added)
        res.send('Added')
      }).catch(function (err) {
        console.log(err);
        res.send(err)
      });

    } else {
      response.status(400).json({ error: 'Ja tem' });
      response.send('Ja tem')
    }
  })
})
