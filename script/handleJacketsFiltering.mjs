
import { API_URL } from './constants.mjs';
import { filteredJackets } from './filteredJackets.mjs';
import { generateJacketsHtml } from './generateJacketsHtml.mjs';

export function handleJacketsFiltering(jackets, genderFilter = 'all') {
  const filteredData = filteredJackets(jackets, genderFilter); 
  const jacketsContainer = document.querySelector("#jacketsSection");
  jacketsContainer.innerHTML = ""; 
  generateJacketsHtml(filteredData);
}

export async function fetchJacketsData() {
  const response = await fetch(`${API_URL}`); 
  const jackets = await response.json();
  return jackets;
}

export function init() {
  fetchJacketsData().then((jackets) => {
    handleJacketsFiltering(jackets);
    document.getElementById("filter-all").addEventListener("click", () => handleJacketsFiltering(jackets, "all"));
    document.getElementById("filter-female").addEventListener("click", () => handleJacketsFiltering(jackets, "female"));
    document.getElementById("filter-male").addEventListener("click", () => handleJacketsFiltering(jackets, "male"));
  });
}

init(); 