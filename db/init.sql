-- tables: User, Session, Novel, Episode

CREATE TABLE if not exists Test (
	id VARCHAR(24) NOT NULL,
	message TEXT NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE if not exists User (
	id VARCHAR(24) NOT NULL,
	name TEXT NOT NULL,
	email TEXT NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE if not exists Session (
	id VARCHAR(24) NOT NULL,
	expires INTEGER NOT NULL,
	userId VARCHAR(24) NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE if not exists Novel (
	id VARCHAR(24) NOT NULL,
	title TEXT NOT NULL,
	writerId  VARCHAR(24) NOT NULL,

	PRIMARY KEY (id)
);

CREATE TABLE if not exists Episode (
	id VARCHAR(24) NOT NULL,
	title TEXT NOT NULL,
	writerId  VARCHAR(24) NOT NULL,
	content TEXT NOT NULL,

	PRIMARY KEY (id)
);