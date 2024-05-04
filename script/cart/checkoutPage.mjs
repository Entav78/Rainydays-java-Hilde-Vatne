import { initializeCartFeatures } from './cartFunctions.mjs';
import { API_URL } from "../constants.mjs";
import { fetchData } from '../fetchData.mjs';
import { continueShoppingButton } from './continueShoppingButton.mjs';
import { confirmOrderButton } from './completePurchaseButton.mjs';

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
     itemImage.alt = item.title;y

     const itemTitle = document.createElement("p");
     itemTitle.textContent = item.title;

     const itemPrice = document.createElement("p");
     itemPrice.textContent = `Price: $${item.price}`;

     totalCost += item.price;

     itemDiv.append(itemImage, itemTitle, itemPrice);
     cartContainer.appendChild(itemDiv);
  });
  
  cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
  cartContainer.append(cartTotalElement);

const continueShoppingBtn = continueShoppingButton();
cartContainer.appendChild(continueShoppingBtn);

const confirmOrderBtn = confirmOrderButton();
cartContainer.appendChild(confirmOrderBtn);

}

document.addEventListener("DOMContentLoaded", () => {
  initializeCartFeatures();
  renderCart();
});