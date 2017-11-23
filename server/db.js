const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'));

class DataBase extends PouchDB {
  constructor() {
    super('react-app');
  }
}

module.exports = DataBase;