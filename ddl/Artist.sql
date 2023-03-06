-- Artist(arID, name)

SET search_path to 'p320_27';

CREATE TABLE Artist (
	arID 		TEXT PRIMARY KEY,
	name		TEXT NOT NULL UNIQUE
);

GRANT ALL ON TABLE p320_27.Artist TO mjc, pjw9963, msr6455, bjj5413, tmf9047; 	
