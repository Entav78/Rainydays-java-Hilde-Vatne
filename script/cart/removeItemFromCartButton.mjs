import { removeItemFromCart } from './removeItemFromCart.mjs';
import { renderCart } from './displayCart.mjs';
import { updateCartCount } from './updateCartCount.mjs';


export function removeItemFromCartButton(jacket) {
  const removeItemFromCartBtn = document.createElement("button");
  removeItemFromCartBtn.textContent = "Remove from Cart";
  removeItemFromCartBtn.className = "remove-cart-item-button"; // Add a class for styling if needed
  
  removeItemFromCartBtn.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent any parent element events
      removeItemFromCart(jacket); // Pass the 'jacket' to remove from cart
      renderCart(); // Optionally re-render the cart
      updateCartCount(); // Update the cart count indicator
      alert('Jacket removed from cart!'); // Feedback to the user
  });

  return removeItemFromCartBtn;
}

