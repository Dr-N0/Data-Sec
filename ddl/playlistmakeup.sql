-- PlaylistMakeup(pID, sID)
SET search_path to 'p320_27';

CREATE TABLE PlaylistMakeup(
	pID INT,
	CONSTRAINT playlist_id FOREIGN KEY(pid) REFERENCES playlist(pid),
	sID TEXT,
	CONSTRAINT song_id FOREIGN KEY(sid) REFERENCES song(sid),
	PRIMARY KEY(pID, sID)
);

GRANT ALL ON TABLE p320_27.playlistmakeup TO mjc, pjw9963, msr6455, bjj5413, tmf9047;
