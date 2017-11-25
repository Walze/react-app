const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))

class DataBase extends PouchDB {
  constructor() {
    super('react-app')
  }

  create(req, res) {
    const request = req.body
    const response = res

    this.find({
      selector: { email: request.email }
    }).then((fetched) => {
      if (!fetched.docs.length)
        this.info()
          .then((info) =>
            this.put({
              ...request,
              _id: String(++info.doc_count)
            }).then(() =>
              response.send('Added')
              ).catch((err) => response.send(err))
          ).catch(err => response.send(err))
      else
        response.status(409).send('Email already exists')
    })
  }
}

module.exports = DataBase

