

export function toShoppingCartButton() {
  const redirectToShoppingCartBtn = document.createElement("button");
  redirectToShoppingCartBtn.textContent = "Go to Shopping Cart";

  redirectToShoppingCartBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart") || '[]');
    if (cart.length === 0) {
      alert("Your cart is currently empty. Please add some items before heading to the cart.");
    } else {
      window.location.href = 'http://127.0.0.1:5500/html/cart/index.html';
    }
  });

  return redirectToShoppingCartBtn;
}
