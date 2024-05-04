import { updateCartCount } from './updateCartCount.mjs';
import { renderCart } from './displayCart.mjs';



export function removeItemFromCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = cart.filter(cartItem => cartItem.id !== jacket.id); // Use 'jacket.id' here

  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update the cart in local storage

  renderCart(); // Re-render the cart to reflect changes
  updateCartCount(); // Update the cart count immediately
}

