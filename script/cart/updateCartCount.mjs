export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const itemCount = cart.length;
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = itemCount;

    cartCountElement.style.color = 'red';
    cartCountElement.style.fontSize = '20px';
  }
}
