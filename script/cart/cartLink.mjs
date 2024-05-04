export function setupCartLink() {
  const cartLink = document.getElementById("cartLink");
  if (cartLink) {
      cartLink.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent the default anchor link behavior
          const cart = JSON.parse(localStorage.getItem("cart") || "[]");
          if (cart.length === 0) {
              alert("Your cart is empty.");
          } else {
              window.location.href = 'http://127.0.0.1:5500/html/cart/index.html';
          }
      });
  }
}
/*
document.getElementById('cartLink').addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem("cart") || '[]');
    if (cart.length === 0) {
      alert("Your cart is currently empty. Please add some items before heading to the cart.");
    } else {
      window.location.href = 'https://entav78.github.io/Rainydays-java-Hilde-Vatne/html/cart/index';
    }
  });
  */