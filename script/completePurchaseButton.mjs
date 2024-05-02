export function confirmOrderButton() {
  const confirmOrderBtn = document.createElement("button");
  confirmOrderBtn.textContent = "Confirm your Order";

  confirmOrderBtn.addEventListener("click", () => {
    window.location.href = 'http://127.0.0.1:5500/checkout/confirmation/confirmedCheckoutPage.html';
  });

  return confirmOrderBtn;
}