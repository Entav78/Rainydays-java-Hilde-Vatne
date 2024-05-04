export function continueShoppingButton() {
  const continueShoppingBtn = document.createElement("button");
  continueShoppingBtn.textContent = "Continue Shopping";

  continueShoppingBtn.addEventListener("click", () => {
    window.location.href = 'https://entav78.github.io/Rainydays-java-Hilde-Vatne/';
  });

  return continueShoppingBtn;
}