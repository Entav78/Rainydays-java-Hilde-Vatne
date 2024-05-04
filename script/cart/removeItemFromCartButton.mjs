import { removeItemFromCart } from './removeItemFromCart.mjs';
import { renderCart } from './displayCart.mjs';
import { updateCartCount } from './updateCartCount.mjs';


export function removeItemFromCartButton(jacket) {
  const removeItemFromCartBtn = document.createElement("button");
  removeItemFromCartBtn.textContent = "Remove from Cart";
  removeItemFromCartBtn.className = "remove-cart-item-button";
  
  removeItemFromCartBtn.addEventListener("click", (event) => {
      event.stopPropagation(); 
      removeItemFromCart(jacket);
      renderCart();
      updateCartCount();
      alert('Jacket removed from cart!');
  });

  return removeItemFromCartBtn;
}

