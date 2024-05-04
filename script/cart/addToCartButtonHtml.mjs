

import { addToCart } from './addToCart.mjs';

export function addToCartButton(jacket) {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    addToCart(jacket);
    return false; 
  });

  return addToCartBtn;
}
