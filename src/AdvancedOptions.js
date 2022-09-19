let optionContent = document.getElementById("optionContent");
let idInput = document.getElementById("idInput");
let idRemove = document.getElementById("idDelete");
let submitButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");
let viewCartButton = document.getElementById("cartButton");
let viewTotalPriceButton = document.getElementById("totalPriceButton");
submitButton.addEventListener("click", addFood);
removeButton.addEventListener("click", removeFood);
viewCartButton.addEventListener("click", viewCart);
viewTotalPriceButton.addEventListener("click", viewTotalPrice);
async function addFood() {
  let inputFood = {
    itemID: idInput.value,
  };
  let response = await fetch("http://20.171.104.56:9000/advanced_options", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputFood),
  });
}
async function removeFood() {
  let inputFood = {
    itemID: idRemove.value,
  };
  let response = await fetch("http://20.171.104.56:9000/advanced_options", {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputFood),
  });
}
async function viewCart() {
  let response = await fetch(
    "http://20.171.104.56:9000/advanced_options/view_my_cart/"
  );
  response = await response.json();
  loadCart(response);
}
async function loadCart(response) {
  optionContent.innerHTML = "";
  console.log(response);
  let cartTable = document.createElement("table");
  for (let i = 0; i < response.length; i++) {
    let cartContainer = document.createElement("tr");
    let productId = document.createElement("td");
    productId.innerHTML = "Product ID: " + response[i].productID;
    cartContainer.appendChild(productId);
    let productName = document.createElement("td");
    productName.innerHTML = " Product Name: " + response[i].productName;
    cartContainer.appendChild(productName);
    let productPrice = document.createElement("td");
    productPrice.innerHTML = " Product Price: $" + response[i].productPrice;
    cartContainer.appendChild(productPrice);
    let imageInTable = document.createElement("td");
    imageInTable.innerHTML =
      `<img class="imagehandler" src=` +
      response[i].productUrl +
      `alt="Food Image"></img>`;
    cartContainer.appendChild(imageInTable);
    cartTable.appendChild(cartContainer);
  }
  optionContent.appendChild(cartTable);
}
async function viewTotalPrice() {
  let response = await fetch(
    "http://20.171.104.56:9000/advanced_options/view_total_price/"
  );
  response = await response.json();
  loadTotalPrice(response);
}
async function loadTotalPrice(response) {
  optionContent.innerHTML = "";
  console.log(response);
  for (let i = 0; i < response.length; i++) {
    let productPrice = document.createElement("h3");
    productPrice.innerHTML = "Total Price: $" + response[i].foodPrice;
    optionContent.appendChild(productPrice);
  }
}
