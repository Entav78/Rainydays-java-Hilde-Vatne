/*import { initializeCartFeatures, renderCart } from './cartFunctions.mjs'; // Make sure to adjust the path if needed
import { renderCart } from './addToCart.mjs';
document.addEventListener("DOMContentLoaded", () => {
  initializeCartFeatures(); // Initialize cart features
  renderCart(); // Render the cart if applicable
});

const getCartTotalButton = document.querySelector("#cart-total");

if (getCartTotalButton) {
  getCartTotalButton.addEventListener("click", () => console.log(getCartTotal()));
}
*/

import { initializeCartFeatures, renderCart } from './cartFunctions.mjs'; // Make sure to adjust the path if needed
import { renderCart } from './addToCart.mjs';
document.addEventListener("DOMContentLoaded", () => {
  initializeCartFeatures(); // Initialize cart features
  renderCart(); // Render the cart if applicable
});

const getCartTotal = document.querySelector("#cart-total");

if (getCartTotal) {
  getCartTotal.addEventListener("click", () => console.log(getCartTotal()));
}