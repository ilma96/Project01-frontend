let updateContent = document.getElementById("updateContent");
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
  let response = await fetch("http://localhost:9000/administrator_options", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputCredentials),
  });
}
async function checkCredentials() {
  let username = usernameInput.value;
  let password = passwordInput.value;
  let response = await fetch("http://localhost:9000/administrator_options");
  response = await response.json();
  if (response.username == username && response.password == password) {
    window.location = "MenuUpdate.html";
  } else {
    updateContent.innerHTML = "Wrong Username or Password! Try Again.";
    updateContent.innerHTML = "";
  }
}
