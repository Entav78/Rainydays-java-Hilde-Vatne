

import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateSingleJacketItemHtml } from "./generateSingleJacketItemHtml.mjs";
import { setupCartLink } from "./cart/cartLink.mjs";
import { updateCartCount } from './cart/updateCartCount.mjs';

function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

document.addEventListener('DOMContentLoaded', async function() {
  setupCartLink();
  updateCartCount();

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