import { removeItemFromCart } from './removeItemFromCart.mjs';
import { renderCart } from './displayCart.mjs';

/*
export function removeItemFromCartButton(item) {
  const removeItemFromCartBtn = document.createElement("button");
  removeItemFromCartBtn.textContent = "Remove from Cart";
  removeItemFromCartBtn.className = "remove-cart-item-button"; // Add a class for styling if needed
  removeItemFromCartBtn.addEventListener("click", (event) => {
    //event.stopPropagation(); // Prevent any parent element events
    removeItemFromCart(item); // Remove the item from the cart
    alert('Jacket removed from cart!'); // Feedback to the user
    renderCart();
    // Optionally, trigger a re-render of the cart if you have a dynamic UI update method
    // This would depend on how you're handling the display of cart items.
  });

  return removeItemFromCartBtn;
}
*/

export function removeItemFromCartButton(jacket) {
  const removeItemFromCartBtn = document.createElement("button");
  removeItemFromCartBtn.textContent = "Remove from Cart";
  removeItemFromCartBtn.className = "remove-cart-item-button"; // Add a class for styling if needed
  removeItemFromCartBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent any parent element events
      removeItemFromCart(jacket); // Pass the 'jacket' to remove from cart
      alert('Jacket removed from cart!'); // Feedback to the user
      renderCart(); // Optionally re-render the cart
  });

  return removeItemFromCartBtn;
}

