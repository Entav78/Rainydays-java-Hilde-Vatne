import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateSingleJacketItemHtml } from "./generateSingleJacketItemHtml.mjs";

function getIdFromURL() {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  const jacketId = params.get("id");
  return jacketId;
}

const displayContainer = document.querySelector("#display-container");


async function fetchAndRenderJackets() {
  const jacketId = getIdFromURL();
  const jacketData = await fetchData(`${API_URL}/${jacketId}`);
  const singleJacketHtml = generateSingleJacketItemHtml(jacketData);
  displayContainer.append(singleJacketHtml);
}

fetchAndRenderJackets();

/*
import { fetchData } from "./fetchData.mjs";
import { generateSingleJacketItemHTML } from "./generateSingleJacketItemHtml.mjs";

function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function loadJacketDetails() {
  const jacketId = getIdFromURL();
  if (!jacketId) {
    console.error("Jacket ID not found in URL");
    return;
  }

  try {
    const jacketData = await fetchData(`API_URL/${jacketId}`);
    const jacketHTML = generateSingleJacketItemHTML(jacketData);
    const displayContainer = document.querySelector("#display-container");
    displayContainer.appendChild(jacketHTML);
  } catch (error) {
    console.error("Failed to fetch jacket data:", error);
  }
}

loadJacketDetails();
*/