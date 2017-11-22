console.log('Started!')

var PouchDB = require('pouchdb');
var db = new PouchDB('todos');

function addTodo(text) {
  var todo = {
    _id: new Date().toISOString(),
    title: text,
  };
  db.put(todo, (err, result) => {
    if (!err) {
      console.log('Successfully posted a todo!');
    }
  });
}

function getAll() {
  db.allDocs({ descending: true }).then((doc) => {
    console.log(doc.rows);
  });
}

//addTodo('lol');

getAll();