require("dotenv").config();
const express = require("express");
var cors = require("cors");
const query = require("./db-queries");
const command = require("./db-commands");

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("🅱️otify!");
});

app.get("/users", async (req, res) => {
  const results = await query.getAllUsers();
  res.send(results);
});

app.get("/users/username/:username", async (req, res) => {
  const results = await query.getUserByUsername(req.params.username);
  res.send(results);
});

app.get("/users/email/:email", async (req, res) => {
  const results = await query.getUsersByEmail(req.params.email);
  res.send(results);
});

app.post("/user", async (req, res) => {
  const results = await command.addNewUser(
    req.body.username,
    req.body.email,
    req.body.firstname,
    req.body.lastname,
    req.body.password
  );
  res.send(results);
});

app.post("/user/active", async (req, res) => {
  const results = await command.updateUserLastAccess(req.body.username);
  res.send(results);
});

app.listen(port, () => {
  console.log(`Botify listening on port ${port}`);
});
