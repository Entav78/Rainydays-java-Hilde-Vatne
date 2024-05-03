
import { addToCart } from './addToCart.mjs'; // Ensure this function exists and works as expected


// works, but redirects to productPage
export function addToCartButton(jacket) {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", () => addToCart(jacket)); // Attach the button to add the specific jacket to the cart

  return addToCartBtn;
}


/*
export function addToCartButton(jacket) {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents the link from being clicked
    addToCart(jacket); // Attach the button to add the specific jacket to the cart
  });

  return addToCartBtn;
}
*/
