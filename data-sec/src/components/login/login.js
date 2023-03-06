import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getUsers, signUpUser } from "../../requests.js";
import "./login.css";

export default function Login({ submit, updateUsername }) {
  const [toggleAuth, setToggleAuth] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [email, setEmail] = useState("");

  const [savedUsernameList, setSavedUsernameList] = useState("");

  if (savedUsernameList == "") {
    getUsers().then((data) => {
      setSavedUsernameList(data);
    });
  }

  function validateLoginForm() {
    return username.length > 0 && password.length > 0;
  }

  function validateSignUpForm() {
    return (
      username.length > 0 &&
      password.length > 0 &&
      firstN.length > 0 &&
      lastN.length > 0 &&
      email.length > 0
    );
  }

  function togglePage() {
    setToggleAuth(!toggleAuth);
  }

  function handleSignUpSubmit(event) {
    // Where we interface with sql

    // Has user made an account
    let currDate = new Date().toDateString();
    let currentCreateVal = {
      username: username,
      password: password,
      loginTime: currDate,
    };

    signUpUser(username, email, firstN, lastN, password).then(() => {
        let holder = savedUsernameList;
        holder.push(currentCreateVal);
        setSavedUsernameList(holder);
        alert("Account created!");
      }).catch(() => alert("Something went wrong!"));
    togglePage();
    event.preventDefault();
  }

  function handleLoginSubmit(event) {
    // Where we interface with sql

    // Has user made an account
    savedUsernameList.map((a) => {
      if (
        a.username == username &&
        a.password == password &&
        toggleAuth == false
      ) {
        submit();
      }
    });
    // alert("Wrong information");
    event.preventDefault();
  }

  // email, firstName, lastName
  return (
    <div className="auth-container">
      {toggleAuth ? (
        <div className="SignUp">
          <Button onClick={togglePage}>Log in</Button>
          <h1 className="sign-title">Sign up</h1>
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group size="lg" controlId="username">
              <Form.Label>
                Username <span className="red">*</span>
              </Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  updateUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>
                Password <span className="red">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <hr/>
            <Form.Group size="lg" controlId="email">
              <Form.Label>
                Email
              </Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="firstname">
              <Form.Label>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                value={firstN}
                onChange={(e) => setFirstN(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="lastname">
              <Form.Label>
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                value={lastN}
                onChange={(e) => setLastN(e.target.value)}
              />
            </Form.Group>
            <Button
              block="true"
              size="lg"
              type="submit"
              disabled={!validateSignUpForm()}
            >
              Sign up
            </Button>
          </Form>
        </div>
      ) : (
        <div className="Login">
          <Button onClick={togglePage}>Sign up</Button>
          <h1 className="log-title">Log in</h1>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group size="lg" controlId="username">
              <Form.Label>
                Username <span className="red">*</span>
              </Form.Label>
              <Form.Control
                autoFocus
                type="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  updateUsername(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>
                Password <span className="red">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              block="true"
              size="lg"
              type="submit"
              disabled={!validateLoginForm()}
            >
              Log in
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}
