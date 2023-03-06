-- Playlist(pID, name)

SET search_path to 'p320_27';

CREATE TABLE Playlist (
	pID 		SERIAL PRIMARY KEY,
	name		TEXT NOT NULL UNIQUE
);

GRANT ALL ON TABLE p320_27.Playlist TO mjc, pjw9963, msr6455, bjj5413, tmf9047; 	