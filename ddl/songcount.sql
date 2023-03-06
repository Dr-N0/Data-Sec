-- SongCount(sID, userName, date)
SET search_path to 'p320_27';

CREATE TABLE SongCount(
	sID TEXT,
	CONSTRAINT song_id FOREIGN KEY(sid) REFERENCES song(sid),
	userName TEXT,
	CONSTRAINT user_name FOREIGN KEY(username) REFERENCES users(username),
	dateListened TIMESTAMP NOT NULL CHECK(dateListened < now()),
	PRIMARY KEY(sID, username, dateListened)
);

GRANT ALL ON TABLE p320_27.songcount TO mjc, pjw9963, msr6455, bjj5413, tmf9047;
