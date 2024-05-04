export function setupCartLink() {
  const cartLink = document.getElementById("cartLink");
  if (cartLink) {
      cartLink.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent the default anchor link behavior
          const cart = JSON.parse(localStorage.getItem("cart") || "[]");
          if (cart.length === 0) {
              alert("Your cart is empty.");
          } else {
              window.location.href = 'https://entav78.github.io/Rainydays-java-Hilde-Vatne/html/cart/index';
          }
      });
  }
}
