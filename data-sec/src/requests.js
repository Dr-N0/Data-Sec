let baseUrl = "http://localhost:4321";

export async function getUsers() {
  return await fetch(`${baseUrl}/users`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
}

export async function signUpUser(
  username,
  email,
  firstname,
  lastname,
  password
) {
  let payload = {
    username: username,
    email: email,
    firstname: firstname,
    lastname: lastname,
    password: password,
  };

  let jsonPayload = JSON.stringify(payload);

  return await fetch(`${baseUrl}/user`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: jsonPayload,
  })
    .then(function (res) {
      res.json();
    })
    .then(function (data) {
      return data;
    })
    .catch((error) => console.log(error));
}

export async function getUsersByEmail(email) {
  return await fetch(`${baseUrl}/users/email/${email}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export async function getUsersByUsername(username) {
  return await fetch(`${baseUrl}/users/username/${username}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
