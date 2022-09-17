let menuContent = document.getElementById("content");
let viewMenuClick = document.getElementById("menu");
viewMenuClick.addEventListener("click", displayMenu);
async function displayMenu() {
  let response = await fetch("http://localhost:9000/view_menu/");
  response = await response.json();
  loadMenu(response);
}
async function loadMenu(response) {
  menuContent.innerHTML = "";
  console.log(response);
  let menuTable = document.createElement("table");
  for (let i = 0; i < response.length; i++) {
    let menuContainer = document.createElement("tr");
    let productId = document.createElement("td");
    productId.innerHTML = "Product ID: " + response[i].productID;
    menuContainer.appendChild(productId);
    let productName = document.createElement("td");
    productName.innerHTML = " Product Name: " + response[i].productName;
    menuContainer.appendChild(productName);
    let productCategory = document.createElement("td");
    productCategory.innerHTML =
      " Product Category: " + response[i].productCategory;
    menuContainer.appendChild(productCategory);
    let productPrice = document.createElement("td");
    productPrice.innerHTML = " Product Price: $" + response[i].productPrice;
    menuContainer.appendChild(productPrice);
    let imageInTable = document.createElement("td");
    imageInTable.innerHTML =
      `<img class="imagehandler" src=` +
      response[i].productUrl +
      `alt="Food Image"></img>`;
    menuContainer.appendChild(imageInTable);
    menuTable.appendChild(menuContainer);
  }
  menuContent.appendChild(menuTable);
}
