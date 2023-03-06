-- TrackNum(sID, alID, trackNum)
SET search_path to 'p320_27';

CREATE TABLE TrackNum(
	trackNum INT,
	sID INT,
	CONSTRAINT song_id FOREIGN KEY(sid) REFERENCES song(sid),
	alID INT,
	CONSTRAINT album_id FOREIGN KEY(alid) REFERENCES album(alid),
	PRIMARY KEY(sID, alID)
);

GRANT ALL ON TABLE p320_27.tracknum TO mjc, pjw9963, msr6455, bjj5413, tmf9047;