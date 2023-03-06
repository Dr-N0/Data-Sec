-- AlbumMakeUp(sID, alID)
SET search_path to 'p320_27';

CREATE TABLE AlbumMakeUp(
	sID TEXT,
	CONSTRAINT song_id FOREIGN KEY(sid) REFERENCES song(sid),
	alID TEXT,
	CONSTRAINT album_id FOREIGN KEY(alid) REFERENCES album(alid),
	PRIMARY KEY(sID, alID)
);

GRANT ALL ON TABLE p320_27.albummakeup TO mjc, pjw9963, msr6455, bjj5413, tmf9047;
