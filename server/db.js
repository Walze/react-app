const PouchDB = require('pouchdb')

class DataBase extends PouchDB {
  constructor() {
    super('react-app');
  }
}

module.exports = DataBase;