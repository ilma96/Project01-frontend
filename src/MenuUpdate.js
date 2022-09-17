let updateButton = document.getElementById("updateButton");
let input = document.getElementById("idInput");

updateButton.addEventListener("click", updateMenu);

async function updateMenu() {
  console.log("button clicked");
  let productID = input.value;
  let response = await fetch(
    "http://localhost:9000/administrator_options/" + productID,
    {
      method: "PUT",
      mode: "cors",
    }
  );
  response = await response.json();
  console.log(response);
}
