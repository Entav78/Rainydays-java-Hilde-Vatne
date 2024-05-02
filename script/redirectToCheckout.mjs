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
*/

export function redirectToCheckout() {
  const redirectToCheckoutBtn = document.createElement("button");
  redirectToCheckoutBtn.textContent = "Go to Checkout";

  redirectToCheckoutBtn.addEventListener("click", () => {
    window.location.href = 'http://127.0.0.1:5500/checkout/displayCart.html';
  });

  return redirectToCheckoutBtn;
}
