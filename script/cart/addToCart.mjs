

import { renderCart } from './displayCart.mjs';
import { updateCartCount } from './updateCartCount.mjs';

export function addToCart(jacket) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(jacket);
  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
  updateCartCount();
}


