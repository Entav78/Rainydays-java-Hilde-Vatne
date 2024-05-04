

import { renderCart } from './displayCart.mjs';
import { updateCartCount } from './updateCartCount.mjs';  // Ensure this function is exported from wherever it is defined

export function addToCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");  // Always parse the existing cart, defaulting to an empty array if none exists
  cart.push(jacket);  // Add the new item
  localStorage.setItem("cart", JSON.stringify(cart));  // Save the updated cart back to localStorage

  renderCart();  // Re-render the cart to reflect the addition
  updateCartCount();  // Update the displayed cart count
}


