

import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateSingleJacketItemHtml } from "./generateSingleJacketItemHtml.mjs";
import { setupCartLink } from "./cartLink.mjs";  // Ensure this function is correctly named and exported in 'cartLink.mjs'
import { updateCartCount } from './updateCartCount.mjs';

function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

document.addEventListener('DOMContentLoaded', async function() {
  setupCartLink();  // Setup the cart link handling
  updateCartCount(); // Update the cart count as soon as the page loads

  const jacketId = getIdFromURL();
  try {
    const jacketData = await fetchData(`${API_URL}/${jacketId}`);
    const singleJacketHtml = generateSingleJacketItemHtml(jacketData);
    const displayContainer = document.querySelector("#display-container");
    displayContainer.append(singleJacketHtml);
  } catch (error) {
    console.error("Failed to load jacket data:", error);
  }
});