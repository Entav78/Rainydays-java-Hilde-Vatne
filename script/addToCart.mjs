// 1. User clicks the button
// 2. Get the cart from local storage:
//    1. If it exists, return it
//    2. If not, create one and add the item
// 3. Update local storage
/*
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
*/

import { renderCart } from './displayCart.mjs';
import { updateCartCount } from './updateCartCount.mjs';  // Ensure this function is exported from wherever it is defined

export function addToCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");  // Always parse the existing cart, defaulting to an empty array if none exists
  cart.push(jacket);  // Add the new item
  localStorage.setItem("cart", JSON.stringify(cart));  // Save the updated cart back to localStorage

  renderCart();  // Re-render the cart to reflect the addition
  updateCartCount();  // Update the displayed cart count
}


