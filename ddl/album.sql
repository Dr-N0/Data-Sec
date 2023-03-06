-- Album(alID, genre, name, release, arID)

SET search_path to 'p320_27';

CREATE TABLE Album (
	alID	TEXT PRIMARY KEY,
	name	TEXT NOT NULL,
	release date NOT NULL CHECK (release < now()),
	arid TEXT,
	CONSTRAINT album_artist
		FOREIGN KEY(arid)
			REFERENCES artist(arid)
);

GRANT ALL ON TABLE p320_27.album TO mjc, pjw9963, msr6455, bjj5413, tmf9047; 	
