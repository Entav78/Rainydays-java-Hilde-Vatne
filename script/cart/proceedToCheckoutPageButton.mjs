export function proceedToCheckoutButton() {
  const proceedToCheckoutBtn = document.createElement("button");
  proceedToCheckoutBtn.textContent = "To Checkout";

  proceedToCheckoutBtn.addEventListener("click", () => {
    window.location.href = 'https://entav78.github.io/Rainydays-java-Hilde-Vatne/html/newCheckout/index';
  });

  return proceedToCheckoutBtn;
}