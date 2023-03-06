-- Song(sID, title, length, trackNum, genre, release)

SET search_path to 'p320_27';

CREATE TYPE genre AS ENUM ('Pop', 'Rap', 'Jazz', 'Rock', 'Alternative', 'R&B', 'Country');

CREATE TABLE Song (
	sID 		TEXT PRIMARY KEY,
	title		TEXT NOT NULL,
	length 		INTEGER NOT NULL CHECK (length > 0),
	genre 		genre NOT NULL,
	release		date NOT NULL CHECK (release < now())
);

CREATE INDEX idx_song_genre 
ON p320_27.song(genre);

GRANT ALL ON TABLE p320_27.song TO tmf9047;
