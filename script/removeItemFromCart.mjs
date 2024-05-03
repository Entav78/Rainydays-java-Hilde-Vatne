import { renderCart } from './displayCart.mjs';

/*
export function removeItemFromCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]"); 
  const updatedCart = cart.filter(cartItem => cartItem.id !== jacketId); // Remove the item by filtering it out
  
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update the cart in local storage with the filtered items
  
  renderCart(); // Re-render the cart to reflect changes
}
*/

export function removeItemFromCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = cart.filter(cartItem => cartItem.id !== jacket.id); // Use 'jacket.id' here

  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update the cart in local storage

  renderCart(); // Re-render the cart to reflect changes
}