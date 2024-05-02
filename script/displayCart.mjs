//import { API_URL } from "./constants.mjs";
//import { fetchData } from "./fetchData.mjs";

/*
async function fetchCartData() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItems = await Promise.all(cart.map(async item => {
     const response = await fetch(`${API_URL}/${item.id}`);
     return response.json(); // Parse and return item data
  }));

  return cartItems; // Return the enriched items
}
*/

/*
export function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartContainer = document.querySelector("#cart-container");
  const cartTotalElement = document.querySelector("#cart-total");

  if (!cartContainer || !cartTotalElement) return;  // Exit if not on the cart page

  cartContainer.innerHTML = "";  // Clear existing content

  let totalCost = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    const itemTitle = document.createElement("p");
    itemTitle.textContent = item.title;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: $${item.price}`;

    const itemImage = document.createElement("img"); // Create an image element
      itemImage.src = item.image; // Assuming 'item.image' contains a valid URL or path
      itemImage.alt = item.title; // For accessibility

    totalCost += item.price;

    itemDiv.append(itemImage, itemTitle, itemPrice);
    cartContainer.appendChild(itemDiv);
  });
  
  cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
}

*/
/*
export async function renderCart() {
  const cartItems = await fetchCartData(); // Fetch enriched cart data

  const cartContainer = document.querySelector("#cart-container");
  const cartTotalElement = document.querySelector("#cart-total");

  if (!cartContainer || !cartTotalElement) return; // Exit if elements are missing

  cartContainer.innerHTML = ""; // Clear existing content

  let totalCost = 0;

  cartItems.forEach(item => {
     const itemDiv = document.createElement("div");
     itemDiv.classList.add("cart-item");

     const itemImage = document.createElement("img"); // Create an image element
     itemImage.src = item.image; // Assuming 'item.image' contains a valid URL or path
     itemImage.alt = item.title; // For accessibility

     const itemTitle = document.createElement("p");
     itemTitle.textContent = item.title;

     const itemPrice = document.createElement("p");
     itemPrice.textContent = `Price: $${item.price}`;

     totalCost += item.price; // Accumulate total cost

     itemDiv.append(itemImage, itemTitle, itemPrice);
     cartContainer.appendChild(itemDiv);
  });

  cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`; // Display the total cost
}
*/

import { initializeCartFeatures } from './cartFunctions.mjs';
import { API_URL } from "./constants.mjs";
import { fetchData } from './fetchData.mjs';

async function fetchCartData() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItems = await Promise.all(cart.map(async item => {
     const itemData = await fetchData(`${API_URL}/${item.id}`);
     return itemData; // Return enriched item data
  }));

  return cartItems; // Return the full list of enriched items
}

export async function renderCart() {
  const cartItems = await fetchCartData(); // Fetch enriched cart data

  const cartContainer = document.querySelector("#cart-container");
  const cartTotalElement = document.querySelector("#cart-total");

  if (!cartContainer || !cartTotalElement) return; // Exit if elements aren't found

  cartContainer.innerHTML = ""; // Clear existing content

  let totalCost = 0;

  cartItems.forEach(item => {
     const itemDiv = document.createElement("div");
     itemDiv.classList.add("cart-item");

     const itemImage = document.createElement("img"); // Create an image element
     itemImage.src = item.image; // Assuming 'item.image' contains a valid URL or path
     itemImage.alt = item.title; // For accessibility

     const itemTitle = document.createElement("p");
     itemTitle.textContent = item.title;

     const itemPrice = document.createElement("p");
     itemPrice.textContent = `Price: $${item.price}`;

     totalCost += item.price; // Accumulate total cost

     itemDiv.append(itemImage, itemTitle, itemPrice, cartTotalElement);
     cartContainer.appendChild(itemDiv);
  });
  
  cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`; // Display the total cost
  
}

//document.addEventListener("DOMContentLoaded", renderCart);
document.addEventListener("DOMContentLoaded", () => {
  initializeCartFeatures(); // Initialize cart features
  renderCart(); // Render cart contents
});