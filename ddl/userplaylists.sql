-- UserPlaylists(userName, pID)
SET search_path to 'p320_27';

CREATE TABLE UserPlaylists(
	userName TEXT,
	CONSTRAINT user_name FOREIGN KEY(username) REFERENCES users(username),
	pID INT,
	CONSTRAINT playlist_id FOREIGN KEY(pid) REFERENCES playlist(pid),
	PRIMARY KEY(userName, pID)
);

GRANT ALL ON TABLE p320_27.userplaylists TO mjc, pjw9963, msr6455, bjj5413, tmf9047;
