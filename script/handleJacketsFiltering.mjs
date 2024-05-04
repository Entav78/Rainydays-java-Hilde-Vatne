
import { API_URL } from './constants.mjs';
import { filteredJackets } from './filteredJackets.mjs';
import { generateJacketsHtml } from './generateJacketsHtml.mjs';

export function handleJacketsFiltering(jackets, genderFilter = 'all') {
  console.log("Filtering jackets with filter:", genderFilter, jackets);

  const filteredData = filteredJackets(jackets, genderFilter); // Get the filtered array
  console.log("Filtered data:", filteredData);

  const jacketsContainer = document.querySelector("#jacketsSection");
  jacketsContainer.innerHTML = ""; // Clear existing content

  generateJacketsHtml(filteredData); // Render the filtered jackets
}

export async function fetchJacketsData() {
  console.log("Fetching jacket data"); // Log data fetch initiation
  const response = await fetch(`${API_URL}`); // Ensure API_URL is defined elsewhere
  const jackets = await response.json();
  console.log("Fetched jackets count:", jackets.length); // Log the number of jackets fetched
  return jackets;
}

export function init() {
  fetchJacketsData().then((jackets) => {
    console.log("Jackets fetched on initial load:", jackets);
    handleJacketsFiltering(jackets);
    
    document.getElementById("filter-all").addEventListener("click", () => handleJacketsFiltering(jackets, "all"));
    document.getElementById("filter-female").addEventListener("click", () => handleJacketsFiltering(jackets, "female"));
    document.getElementById("filter-male").addEventListener("click", () => handleJacketsFiltering(jackets, "male"));
  });
}

init(); // Ca