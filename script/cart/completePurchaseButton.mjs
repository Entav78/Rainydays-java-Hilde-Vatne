export function confirmOrderButton() {
  const confirmOrderBtn = document.createElement("button");
  confirmOrderBtn.textContent = "Confirm your Order";

  confirmOrderBtn.addEventListener("click", () => {
    window.location.href = 'https://entav78.github.io/Rainydays-java-Hilde-Vatne/html/newCheckout/newConfirmation/index';
  });

  return confirmOrderBtn;
}