import { initializeCartFeatures, renderCart } from './cartFunctions.mjs'; // Make sure to adjust the path if needed

document.addEventListener("DOMContentLoaded", () => {
  initializeCartFeatures(); // Initialize cart features
  renderCart(); // Render the cart if applicable
});

const getCartTotalButton = document.querySelector("#cart-total-button");

if (getCartTotalButton) {
  getCartTotalButton.addEventListener("click", () => console.log(getCartTotal()));
}