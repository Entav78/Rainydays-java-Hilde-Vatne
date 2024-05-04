


export function initializeCartFeatures() {
  const cartTotalElement = document.querySelector("#cart-total");

  if (cartTotalElement) {
    cartTotalElement.addEventListener("click", () => getCartTotal());
  } 
}

