


export function initializeCartFeatures() {
  const getCartTotalButton = document.querySelector("#cart-total-button");

  if (getCartTotalButton) {
    getCartTotalButton.addEventListener("click", () => console.log(getCartTotal()));
  }

  // Any other cart-related initialization
}

export function renderCart() {
  const cartContainer = document.querySelector("#cart-container");
  const cartTotalElement = document.querySelector("#cart-total");

  if (!cartContainer || !cartTotalElement) return; // Exit if not on the cart page

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = ""; // Clear existing content

  let totalCost = 0;

  cart.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    const itemTitle = document.createElement("p");
    itemTitle.textContent = item.title;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: $${item.price}`;

    totalCost += item.price;

    itemDiv.append(itemTitle, itemPrice);
    cartContainer.appendChild(itemDiv);
  });

  cartTotalElement.textContent = `Total: $${totalCost.toFixed(2)}`;
}

