// 1. User clicks the button
// 2. Get the cart from local storage:
//    1. If it exists, return it
//    2. If not, create one and add the item
// 3. Update local storage

import { renderCart } from './displayCart.mjs'; 
export function addToCart(jacket) {
  const cart = localStorage.getItem("cart");
  if (cart === null) {
    const newCart = [];
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  renderCart();
}

/*
export function addToCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(jacket); // Add the jacket to the array

  console.log("Cart after adding:", cart); // Log the cart's contents

  localStorage.setItem("cart", JSON.stringify(cart)); // Update local storage
}
*/

/*
export function getCartTotal() {
  let totalCost = 0;
  const cart = localStorage.getItem("cart");
  if (cart !== null) {
    const newCart = JSON.parse(cart);
    for (let i = 0; i < newCart.length; i++) {
      totalCost = totalCost + newCart[i].price;
    }
  }
  return totalCost;
}
*/

/* testing the code in displayCart.mjs
export function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartContainer = document.querySelector("#cart-container");
  const cartTotalElement = document.querySelector("#cart-total");

  if (!cartContainer || !cartTotalElement) return;

  cartContainer.innerHTML = ""; // Clear existing content

  let totalCost = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    const itemTitle = document.createElement("p");
    itemTitle.textContent = item.title;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: $${item.price}`;

    totalCost += item.price;

    itemDiv.append(itemTitle, itemPrice);
    cartContainer.appendChild(itemDiv);
  });

  cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`; // Display the total cost
}
*/