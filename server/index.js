const express = require('express')
const DataBase = require('./db');
const bodyParser = require('body-parser')
const db = new DataBase;
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3001, () => console.log('Listening on Port 3001'));

app.get('/', (req, res) => {
  db.allDocs().then((doc) => {
    res.send(doc.rows);
  })
})

app.all('/test', (req, res) => {
  res.send(req.body)
})
