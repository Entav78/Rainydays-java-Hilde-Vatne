

import { initializeCartFeatures } from './cartFunctions.mjs';
import { API_URL } from "../constants.mjs";
import { fetchData } from '../fetchData.mjs';
import { continueShoppingButton } from './continueShoppingButton.mjs';
import { proceedToCheckoutButton } from './proceedToCheckoutPageButton.mjs';
import { removeItemFromCartButton } from './removeItemFromCartButton.mjs';
import { setupCartLink } from "./cartLink.mjs";  
import { updateCartCount } from './updateCartCount.mjs';


async function fetchCartData() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItems = await Promise.all(cart.map(async item => {
     const itemData = await fetchData(`${API_URL}/${item.id}`);
     return itemData;
  }));

  return cartItems;
}

export async function renderCart() {
  const cartItems = await fetchCartData();

  const cartContainer = document.querySelector("#cart-container");
  const cartTotalElement = document.querySelector("#cart-total");

  if (!cartContainer || !cartTotalElement) return;

  cartContainer.innerHTML = "";

  let totalCost = 0;

  cartItems.forEach(item => {
     const itemDiv = document.createElement("div");
     itemDiv.classList.add("cart-item");

     const itemImage = document.createElement("img");
     itemImage.src = item.image;
     itemImage.alt = item.title;

     const itemTitle = document.createElement("p");
     itemTitle.textContent = item.title;

     const itemPrice = document.createElement("p");
     itemPrice.textContent = `Price: $${item.price}`;

     totalCost += item.price;

     const removeItemsFromCartBtn = removeItemFromCartButton(item);
    
     itemDiv.append(itemImage, itemTitle, itemPrice, removeItemsFromCartBtn);
     cartContainer.appendChild(itemDiv);
  });
  
  cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
  
  cartContainer.append(cartTotalElement);

const continueShoppingBtn = continueShoppingButton();
cartContainer.appendChild(continueShoppingBtn);

const proceedToCheckoutBtn = proceedToCheckoutButton();
cartContainer.appendChild(proceedToCheckoutBtn);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeCartFeatures();
  setupCartLink();
  updateCartCount();
  renderCart();
});