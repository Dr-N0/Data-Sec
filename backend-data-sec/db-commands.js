const pool = require("./db-connection");

exports.addNewUser = async function (username, email, firstname, lastname, password) {
  const res = await pool.query(
    "INSERT INTO p320_27.users (username, email, firstname, lastname ,password, creationdate, lastaccess) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);",
    [username, email, firstname, lastname, password]
  );
  const results = res.rows;
  return results;
};

exports.updateUserLastAccess = async function (username) {
  const res = await pool.query(
    "UPDATE p320_27.users (lastaccess) VALUES (CURRENT_TIMESTAMP) WHERE username = $1;",
    [username]
  );
  const results = res.rows;
  return results;
};
