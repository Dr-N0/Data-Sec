-- SongArtist(sID, arID)
SET search_path to 'p320_27';

CREATE TABLE SongArtist(
	sID TEXT,
	CONSTRAINT song_id FOREIGN KEY(sid) REFERENCES song(sid),
	arID TEXT,
	CONSTRAINT artist_id FOREIGN KEY(arid) REFERENCES artist(arid),
	PRIMARY KEY(sID, arID)
);

GRANT ALL ON TABLE p320_27.songartist TO mjc, pjw9963, msr6455, bjj5413, tmf9047;
