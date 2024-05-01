


export function initializeCartFeatures() {
  const getCartTotalButton = document.querySelector("#cart-total-button");

  if (getCartTotalButton) {
    getCartTotalButton.addEventListener("click", () => console.log(getCartTotal()));
  }

  // Any other cart-related initialization
}

