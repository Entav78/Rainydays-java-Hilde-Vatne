import { updateCartCount } from './updateCartCount.mjs';
import { renderCart } from './displayCart.mjs';



export function removeItemFromCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const updatedCart = cart.filter(cartItem => cartItem.id !== jacket.id); 

  localStorage.setItem("cart", JSON.stringify(updatedCart));

  renderCart();
  updateCartCount();
}

