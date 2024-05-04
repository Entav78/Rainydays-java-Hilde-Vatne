export function proceedToCheckoutButton() {
  const proceedToCheckoutBtn = document.createElement("button");
  proceedToCheckoutBtn.textContent = "To Checkout";

  proceedToCheckoutBtn.addEventListener("click", () => {
    window.location.href = 'http://127.0.0.1:5500/html/newCheckout/index.html';
  });

  return proceedToCheckoutBtn;
}