export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const itemCount = cart.length;  // Get the number of items in the cart
  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.textContent = itemCount;  // Update the text content with the new count
  }
}