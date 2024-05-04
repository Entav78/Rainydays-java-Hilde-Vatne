export function continueShoppingButton() {
  const continueShoppingBtn = document.createElement("button");
  continueShoppingBtn.textContent = "Continue Shopping";

  continueShoppingBtn.addEventListener("click", () => {
    window.location.href = 'http://127.0.0.1:5500/index.html';
  });

  return continueShoppingBtn;
}