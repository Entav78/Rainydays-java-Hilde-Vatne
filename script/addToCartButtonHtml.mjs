/*
import { addToCart } from './addToCart.mjs'; // Ensure this function exists and works as expected


// works, but redirects to productPage
export function addToCartButton(jacket) {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", () => addToCart(jacket)); // Attach the button to add the specific jacket to the cart

  return addToCartBtn;
}
*/

import { addToCart } from './addToCart.mjs';

export function addToCartButton(jacket) {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission if applicable
    addToCart(jacket);
    return false; // Ensure no value gets returned that might be interpreted as text to append to the DOM
  });

  return addToCartBtn;
}
