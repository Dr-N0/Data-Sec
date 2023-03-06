-- User(userName, password, email, firstName, lastName, creationDate, lastAccess)

SET search_path to 'p320_27';

CREATE TABLE users(
	userName	TEXT PRIMARY KEY UNIQUE,
	password	TEXT NOT NULL,
	email		TEXT NOT NULL,
	firstName 	TEXT NOT NULL,
	lastName	TEXT NOT NULL,
	creationDate	date NOT NULL CHECK (creationDate < now()),
	lastAccess	date NOT NULL CHECK (lastAccess < now())
);


GRANT ALL ON TABLE p320_27.users TO mjc, pjw9963, msr6455, bjj5413;
