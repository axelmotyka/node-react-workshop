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
			md5-Hash text UNIQUE
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

	insertTestArticle() {
		//const article= require('../data/article');
		const instStmt = 'INSERT INTO artikel (artikelID, sourceID, sourceName, author, title, description, url, urlToImage, publishedAt, content, md5-Hash) VALUES (01,'news-com-au', 'News.com.au', '', 'In a uni initiation, these students bobbed for apples in urine and one died', 'STUDENTS bobbed for apples in a mixture of booze and urine as part of a drink-fuelled initiation ceremony where a student died, an inquest has heard.', 'https://www.news.com.au/lifestyle/real-life/news-life/teens-bobbed-for-apples-in-urine-at-boozy-initiation-ceremony/news-story/fb50ad108a2bf67ff2998eca06ed1ab6', '2018-10-24T08:11:53Z', 'STUDENTS bobbed for apples in a mixture of booze and urine as part of a drink-fuelled initiation ceremony where a student died, an inquest has heard. First-year Economics student Ed Farmer, 20, died after being found slumped in a corridor not breathing at the… [+1659 chars]', 'https://www.news.com.au/lifestyle/real-life/news-life/teens-bobbed-for-apples-in-urine-at-boozy-initiation-ceremony/news-story/fb50ad108a2bf67ff2998eca06ed1ab6/2018-10-24T08:11:53Z')';
		return 
		
	}
}

module.exports = NewsRepro;
