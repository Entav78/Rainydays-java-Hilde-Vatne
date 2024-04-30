//import { filteredJackets } from './filterJackets.mjs';

// Example function to initialize and handle filtering logic

/*
function init() {
  fetchJacketsData()
    .then((jackets) => {
      // Set up event listeners for filtering
      document.getElementById("all").addEventListener("click", () => handleJacketsFiltering(jackets, "all"));
      document.getElementById("women").addEventListener("click", () => handleJacketsFiltering(jackets, "female"));
      document.getElementById("men").addEventListener("click", () => handleJacketsFiltering(jackets, "male"));
    });
}

// Call init to initialize the page
init();
*/
/*
function init() {
  fetchJacketsData().then((jackets) => {
    // Set up event listeners for filtering
    document.getElementById("filter-all").addEventListener("click", () => handleJacketsFiltering(jackets, "all"));
    document.getElementById("filter-women").addEventListener("click", () => handleJacketsFiltering(jackets, "female"));
    document.getElementById("filter-men").addEventListener("click", () => handleJacketsFiltering(jackets, "male"));
  });
}

init(); // Initialize the page
*/
/*
import { filteredJackets } from './filteredJackets.mjs';
import { generateJacketsHtml } from './generateJacketsHtml.mjs';

function handleJacketsFiltering(jackets, genderFilter) {
  const filteredData = filteredJackets(jackets, genderFilter); // Get the filtered data
  
  generateJacketsHtml(filteredData); // Render the filtered jackets
}

async function fetchJacketsData() {
  const response = await fetch(`${API_URL}`); // Ensure API_URL is defined elsewhere
  const jackets = await response.json();
  return jackets;
}

function init() {
  fetchJacketsData().then((jackets) => {
    // Set up event listeners for filtering
    document.getElementById("filter-all").addEventListener("click", () => handleJacketsFiltering(jackets, "all"));
    document.getElementById("filter-female").addEventListener("click", () => handleJacketsFiltering(jackets, "female"));
    document.getElementById("filter-male").addEventListener("click", () => handleJacketsFiltering(jackets, "male"));
  });
}

init(); // Call init to initialize the page

*/
import { API_URL } from './constants.mjs';
import { filteredJackets } from './filteredJackets.mjs';
import { generateJacketsHtml } from './generateJacketsHtml.mjs';

function handleJacketsFiltering(jackets, genderFilter) {

  const filteredData = filteredJackets(jackets, genderFilter); // Get the filtered array
 

  const jacketsContainer = document.querySelector("#jacketsSection");
  jacketsContainer.innerHTML = ""; // Clear existing content

  generateJacketsHtml(filteredData); // Render the filtered jackets
}

async function fetchJacketsData() {
  console.log("Fetching jacket data"); // Log data fetch initiation
  const response = await fetch(`${API_URL}`); // Ensure API_URL is defined elsewhere
  const jackets = await response.json();
  console.log("Fetched jackets count:", jackets.length); // Log the number of jackets fetched
  return jackets;
}

function init() {
  fetchJacketsData().then((jackets) => {
    // Set up event listeners for filtering
    document.getElementById("filter-all").addEventListener("click", () => handleJacketsFiltering(jackets, "all"));
    document.getElementById("filter-female").addEventListener("click", () => handleJacketsFiltering(jackets, "female"));
    document.getElementById("filter-male").addEventListener("click", () => handleJacketsFiltering(jackets, "male"));
  });
}

init(); // Ca