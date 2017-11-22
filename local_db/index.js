console.log('Started!')

var PouchDB = require('pouchdb');
var db = new PouchDB('my_database');


var db = new PouchDB('todos');

function addTodo(text) {
  var todo = {
    _id: new Date().toISOString(),
    title: text,
    completed: false
  };
  db.put(todo, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo!');
    }
  });
}

function getAll() {
  db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
    console.log(doc.rows);
  });
}

addTodo('lol');

getAll();