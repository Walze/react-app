const PouchDB = require('pouchdb')
PouchDB.plugin(require('pouchdb-find'))

class Table extends PouchDB {
  constructor(tableName) {
    super(tableName)
  }

  all(func) {
    this.allDocs({
      include_docs: true,
      attachments: true
    }).then((docs) => {
      func(docs)
    })
  }

  create(body, res, primaryKey) {

    this.find({
      selector: { [primaryKey]: body[primaryKey] }
    }).then((fetched) => {
      if (!fetched.docs.length)
        this.info()
          .then((info) => this.put({
            ...body,
            _id: String(++info.doc_count)
          }).then(() => res.send('Added'))
            .catch((err) => res.send(err)))
          .catch(err => res.send(err))
      else
        res.status(409).send(`
          ${primaryKey[0].toUpperCase() + primaryKey.slice(1)} already exists.
        `)
    }).catch((err) => res.send(err))
  }
}

module.exports = Table

