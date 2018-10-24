class NewsRepro {
	constructor(dao) {
		this.dao = dao;
	}

	createTableUser() {
		const createStmt = `CREATE TABLE user(
			userID integer PRIMARY KEY,
			username text NOT NULL UNIQUE
			)`;

		return this.dao.run(createStmt);
	}

	createTableArtikel() {
		const createStmt = `CREATE TABLE artikel(
			artikelID integer PRIMARY KEY,
			sourceID text,
			sourceName text,
			author text NOT NULL,
			title text NOT NULL,
			description text,
			url text,
			urlToImage text,
			publishedAt text NOT NULL,
			content text
		)`;

		return this.dao.run(createStmt);
	}

	createTableFavourites() {
		const createStmt = `CREATE TABLE favourites(
			userID integer NOT NULL,
			artikelID integer NOT NULL,
			FOREIGN KEY(userID) REFERENCES user(userID),
			FOREIGN KEY(artikelID) REFERENCES artikel(artikelID)
			)`;

		return this.dao.run(createStmt);
	}

	dropTableUser() {
		const dropStmt = 'DROP TABLE IF EXISTS user';
		return this.dao.run(dropStmt);
	}

	dropTableArtikel() {
		const dropStmt = 'DROP TABLE IF EXISTS artikel';
		return this.dao.run(dropStmt);
	}
	dropTableFavourites() {
		const dropStmt = 'DROP TABLE IF EXISTS favourites';
		return this.dao.run(dropStmt);
	}
}

module.exports = NewsRepro;
