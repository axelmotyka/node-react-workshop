const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');

const LOG_TAG = 'Sqlite3Dao';

class AppDAO {
	constructor() {
		this.db = null;
	}

	connect(dbFilePath) {
		return new Promise((resolve, reject) => {
			this.db = new sqlite3.Database(dbFilePath, err => {
				if (err) {
					console.log(
						`${LOG_TAG} - Could not connect to database`,
						err
					);
					reject(err);
				} else {
					console.log(`${LOG_TAG} - Connected to database!`);
					resolve(this);
				}
			});
		});
	}

	all(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.all(sql, params, (err, rows) => {
				if (err) {
					console.log('Error running sql: ' + sql);
					console.log(err);
					reject(err);
				} else {
					resolve(rows);
				}
			});
		});
	}

	get(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.get(sql, params, (err, result) => {
				if (err) {
					console.log('Error running sql: ' + sql);
					console.log(err);
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}

	run(sql, params = []) {
		return new Promise((resolve, reject) => {
			this.db.run(sql, params, function(err) {
				if (err) {
					console.log('Error running sql ' + sql);
					console.log(err);
					return reject(err);
				} else {
					resolve({
						id: this.lastID,
					});
				}
			});
		});
	}
}

module.exports = AppDAO;
