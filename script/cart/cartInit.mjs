

import { initializeCartFeatures } from './cartFunctions.mjs'; // Make sure to adjust the path if needed
import { renderCart } from './displayCart.mjs';

document.addEventListener("DOMContentLoaded", () => {
  initializeCartFeatures();
  renderCart();
});




