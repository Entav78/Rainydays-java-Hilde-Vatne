


export function initializeCartFeatures() {
  const cartTotalElement = document.querySelector("#cart-total");

  if (cartTotalElement) {
    cartTotalElement.addEventListener("click", () => console.log(getCartTotal()));
  }

  // Any other cart-related initialization
}

