-- Following(userName, followerName)
SET search_path to 'p320_27';

CREATE TABLE Following(
	username TEXT,
	CONSTRAINT user_name FOREIGN KEY(username) REFERENCES users(username),
	followerName TEXT,
	CONSTRAINT follower_name FOREIGN KEY(followerName) REFERENCES users(username),
	PRIMARY KEY(username, followerName)
);

GRANT ALL ON TABLE p320_27.following TO mjc, pjw9963, msr6455, bjj5413, tmf9047;
