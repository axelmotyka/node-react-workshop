const sqlite3 = require('sqlite3').verbose()
const Promise = require('bluebird')

const LOG_TAG = 'Dao'

class Dao {

  constructor(dbFilePath) {
    return new Promise((resolve, reject) => {
      this.db = new sqlite3.Database(dbFilePath, (err) => {
        if (err) {
          console.log(`${LOG_TAG} - Could not connect to database`, err)
          reject(err);
        } else {
          console.log(`${LOG_TAG} - Connected to database!`)
          resolve(this);
        }
      })
    })
  }

  close() {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
      console.log(`${LOG_TAG} - Closed database connection.`);
    });
  }

  createExampleTable() {
    return new Promise((resolve, reject) => {
      this.db.serialize(() => {
        const dropStmt = `DROP TABLE IF EXISTS example`

        this.db.run(dropStmt, (err) => {
          if (err) {
            console.log(`${LOG_TAG} - Drop table failed:`, err);
            reject(err);
          }
          console.log(`${LOG_TAG} - Dropped table example`);
        });

        const createStmt = `CREATE TABLE example(
        id integer PRIMARY KEY,
        forename text NOT NULL,
        surename text,
        email text NOT NULL UNIQUE
        )`;

        this.db.run(createStmt, (err) => {
          if (err) {
            console.log(`${LOG_TAG} - Create table failed:`, err)
            reject(err);
          }
          console.log(`${LOG_TAG} - Created table example`);
          resolve('Created table "example"!');
        });
      });
    })
  }

  insertExampleData() {
    return new Promise((resolve, reject) => {
      let insertStmt = `INSERT INTO example (forename, surename, email) VALUES (?, ?, ?)`

      this.db.serialize(() => {
        var stmt = this.db.prepare(insertStmt);
        stmt.run('Axel', 'Motyka', 'axel.motyka@telekom.de');
        stmt.run('DemoHorst', null, 'demohorst@fool.de');
        stmt.finalize();

        this.db.each("SELECT * FROM example", function (err, row) {
          console.log(`${LOG_TAG} - ${row.id}: ${row.forename} ${row.surename} ${row.email}`)
        });

        this.db.all("SELECT * FROM example", function (err, rows) {
          resolve(rows);
        })
      });
    })
  }

  select() {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM example", function (err, rows) {
        if (err) {
          console.log(`${LOG_TAG} - Select failed:`, err)
          reject(err);
        }
        resolve(rows);
      })
    });
  }

  insert(forename, surename, email) {
    return new Promise((resolve, reject) => {
      let insertStmt = `INSERT INTO example (forename, surename, email) VALUES (?, ?, ?)`;
      return this.db.run(
        insertStmt,
        [forename, surename, email],
        function (err) {
          if (err) {
            console.log(`${LOG_TAG} - Insert failed:`, err)
            reject(err);
          }
          resolve({
            id: this.lastID
          })
        }
      );
    });
  }

}

module.exports = Dao