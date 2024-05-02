export function redirectToCheckout() {
  window.location.href = 'http://127.0.0.1:5500/checkout/displayCart.html';
}

document.querySelectorAll('.to-checkout-button').forEach(button => {
  button.addEventListener('click', redirectToCheckout);
});