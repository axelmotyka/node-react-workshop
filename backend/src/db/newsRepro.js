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
			content text,
			md5Hash text UNIQUE
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

	insertExampleArticle() {
		const article = {
			source: {
				id: 'testnews.de',
				name: 'testnews.de',
			},
			author: '',
			title: 'Test Title',
			description: 'Bla blabla bla.',
			url: 'http://www.telekom.de',
			urlToImage:
				'https://cdn.newsapi.com.au/image/v1/8619e05cb0d0df10d1a42a3d762a778c?width=650',
			publishedAt: '2018-10-24T08:11:53Z',
			content:
				'STUDENTS bobbed for apples in a mixture of booze and urine as part of a drink-fuelled initiation ceremony where a student died, an inquest has heard. First-year Economics student Ed Farmer, 20, died after being found slumped in a corridor not breathing at the… [+1659 chars]',
			md5Hash: 'demohash-keinechterwert',
		};

		return this.insertArticle(article);
	}

	insertExampleUser() {
		console.log('insert example user');
		return new Promise((resolve, reject) => {
			this.dao.db.serialize(function() {
				let insertStmt =
					'INSERT INTO user (userID, username) VALUES (?,?)';

				var stmt = this.prepare(insertStmt);
				stmt.run(1, 'testuserBackend');
				stmt.run(2, 'testuserFrontend');
				stmt.finalize();

				resolve(true);
			});
		});
	}

	insertExampleFavourite() {
		this.insertFavourite(2, 1);
	}

	insertFavourite(userID, artikelID) {
		console.log('insert favourite');

		return new Promise((resolve, reject) => {
			let insertStmt = `INSERT INTO favourites (userID, artikelID) VALUES (${userID}, ${artikelID})`;
			this.dao.run(insertStmt);
		});
	}

	insertArticle(article) {
		console.log('insert article');
		let insertStmt = `INSERT INTO artikel 
					(sourceID, sourceName, author, title, description, url, urlToImage, publishedAt, content, md5Hash) 
					VALUES 
					("${article.source.id}","${article.source.name}","${article.author}","${
	article.title
}","${article.description}","${article.url}","${article.urlToImage}","${
	article.publishedAt
}","${article.content}","${article.md5Hash}")`;
		return this.dao.run(insertStmt);
	}

	selectArtikelByMD5(md5Hash) {
		let select = `SELECT artikelID FROM artikel WHERE md5Hash="${md5Hash}"`;
		return this.dao.all(select);
	}

	selectUser(username) {
		console.log('selectUser()');
		let select = `SELECT userID FROM user WHERE username="${username}"`;
		return this.dao.all(select);
	}

	selectAllFavouriteArticles(userID) {
		console.log('selectAllFavouriteArticles()');
		let select = `SELECT artikelID FROM favourites WHERE userID=${userID}`;
		return this.dao.all(select);
	}

	selectAllArticles(artikelIDs) {
		console.log('selectAllArticles()');
		let select = 'SELECT * FROM artikel WHERE artikelID=';
		let i;
		for(i=0; i < artikelIDs.length; i++) {
			if(i==0) select += artikelIDs[i].artikelID;
			else select += ' OR artikelID=' + artikelIDs[i].artikelID;
		}
		return this.dao.all(select);
	}

	selectFavourites(userID, artikelID) {
		let select = `SELECT * FROM favourites WHERE userID=${userID} AND artikelID=${artikelID}`;
		return this.dao.all(select);
	}
}

module.exports = NewsRepro;
