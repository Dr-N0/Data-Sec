const pool = require("./db-connection");

exports.getAllUsers = async function () {
  const res = await pool.query(
    "SELECT username, password, email, firstname, lastname, creationdate, lastaccess FROM p320_27.users;"
  );
  const results = res.rows;
  return results;
};

exports.getUsersByEmail = async function (email) {
  const res = await pool.query(
    "SELECT * FROM p320_27.users WHERE email = $1;",
    [email]
  );
  const results = res.rows;
  return results;
};

exports.getUserByUsername = async function (username) {
  const res = await pool.query(
    "SELECT * FROM p320_27.users WHERE username = $1;",
    [username]
  );
  const results = res.rows;
  return results;
};

const getFieldFromKey = function (key) {
  switch (key) {
    case "song":
      return "s.title";
    case "artist":
      return "a.name";
    case "album":
      return "al.name";
    case "genre":
      return "s.genre";
    default:
      console.log(`unrecognized field: ${key}.`);
      throw error(`I dont know to convert this key to a field, key: ${key}`);
  }
};
