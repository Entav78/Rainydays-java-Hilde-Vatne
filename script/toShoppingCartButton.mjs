/*export function redirectToCheckout() {
  window.location.href = 'http://127.0.0.1:5500/checkout/displayCart.html';
}

document.querySelectorAll('.to-checkout-button').forEach(button => {
  button.addEventListener('click', redirectToCheckout);
});
*/

/*
export function redirectToCheckout() {
  const redirectToCheckoutBtn = document.createElement("cartButton");
  redirectToCheckoutBtn.textContent = "Go to Checkout";
  window.location.href = 'http://127.0.0.1:5500/checkout/displayCart.html';
  //redirectToCheckoutBtn.addEventListener("click", () => redirectToCheckout(jacket));
}

document.querySelectorAll('.to-checkout-button').forEach(button => {
  button.addEventListener('click', redirectToCheckout);
});


export function toShoppingCartButton() {
  const redirectToShoppingCartBtn = document.createElement("button");
  redirectToShoppingCartBtn.textContent = "Go to Shopping Cart";

  redirectToShoppingCartBtn.addEventListener("click", () => {
    window.location.href = 'http://127.0.0.1:5500/checkout/displayCart.html';
  });

  return redirectToShoppingCartBtn;
}
*/

export function toShoppingCartButton() {
  const redirectToShoppingCartBtn = document.createElement("button");
  redirectToShoppingCartBtn.textContent = "Go to Shopping Cart";

  redirectToShoppingCartBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart") || '[]');
    if (cart.length === 0) {
      alert("Your cart is currently empty. Please add some items before heading to the cart.");
    } else {
      window.location.href = 'http://127.0.0.1:5500/checkout/displayCart.html';
    }
  });

  return redirectToShoppingCartBtn;
}
