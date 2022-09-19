let updateContent = document.getElementById("content");
let loginButton = document.getElementById("log");
let usernameInput = document.getElementById("Uname");
let passwordInput = document.getElementById("Pass");
loginButton.addEventListener("click", postCredentials);
loginButton.addEventListener("click", checkCredentials);

async function postCredentials() {
  let inputCredentials = {
    username: usernameInput.value,
    password: passwordInput.value,
  };
  let response = await fetch(
    "http://20.171.104.56:9000/administrator_options",
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputCredentials),
    }
  );
}
async function checkCredentials() {
  updateContent.innerHTML = "";
  let response = await fetch("http://20.171.104.56:9000/administrator_options");
  response = await response.json();
  let username = usernameInput.value;
  let password = passwordInput.value;
  if (username == response[0]?.username && password == response[0]?.password) {
    window.location = "MenuUpdate.html";
  } else if (
    username != response[0]?.username &&
    password != response[0]?.password
  ) {
    updateContent.innerHTML = "Wrong Username or Password! Try Again.";
  }
}
