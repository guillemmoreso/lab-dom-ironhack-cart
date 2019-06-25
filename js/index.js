/*var price = document.getElementsByClassName("product-price");
var input = document.getElementById("quantity").value;
console.log(input);*/

function updatePrice() {
  let price = document.getElementsByClassName("product-price");
  let total = 0;
  let totalPrice = 0;
  for (let i = 0; i < price.length; i++) {
    const input = document.getElementsByClassName("quantity")[i].value;
    let productPrice = parseFloat(price[i].innerText.replace("$", ""));
    total = input * productPrice;
    totalPrice += total;
    let spanPrice = document.getElementsByClassName("product-total-price")[i];
    spanPrice.innerHTML = "$" + total.toFixed(2);
  }
  console.log(totalPrice);
  document.getElementById("totalPrice").innerHTML =
    "Total: " + "$" + totalPrice;
}
let deleteButtons = document.getElementsByClassName("btn-delete");
deleteButtons.addEvenListener("click", deleteProduct);

function deleteProduct() {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
}
function createProduct() {
  let input1 = document.getElementById("name");
  let input2 = document.getElementById("price");
  let newProducts = document.getElementById("div-products");
  newProducts.innerHTML = 
}

function deleteItem(event) { }

function getPriceByProduct(itemNode) { }

function updatePriceByProduct(productPrice, index) { }

function getTotalPrice() { }

function createQuantityInput() { }

function createDeleteButton() { }

function createQuantityNode() { }

function createItemNode(dataType, itemData) { }

function createNewItemRow(itemName, itemUnitPrice) { }

function createNewItem() { }

/*
window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
*/
Collapse



