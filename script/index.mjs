/* Importing API_URL from constant.mjs
import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateJacketsHtml } from "./generateJacketsHtml.mjs";
import { loaderJackets } from "./loaderJackets.mjs";



async function fetchAndRenderJacketsHtml() {
  // Fetch the data from the API and store it as 'jackets'
  const jackets = await fetchData(API_URL);
  // Generate HTML for all the jackets
  generateJacketsHtml(jackets);
  
} 
/*catch (error) {
  console.error("Failed to process jackets:", error);
}
fetchAndRenderJacketsHtml();


import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateJacketsHtml } from "./generateJacketsHtml.mjs";
import { loader } from "./loaderJackets.mjs";

const jacketLoader = new loader(
  '<div class="loader">Loading...</div>', // HTML for the loader
  '.loader { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }' // CSS for the loader
);

async function fetchAndRenderJacketsHtml() {
  try {
    // Inject the loader into the page
    jacketLoader.inject();

    // Fetch the data from the API and store it as 'jackets'
    const jackets = await fetchData(API_URL);

    // Generate HTML for all the jackets
    generateJacketsHtml(jackets);

    // Remove the loader once data is processed
    jacketLoader.remove();
  } catch (error) {
    console.error("Failed to process jackets:", error);
    jacketLoader.remove(); // Ensure loader is removed even if there's an error
  }
}

fetchAndRenderJacketsHtml();


import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateJacketsHtml } from "./generateJacketsHtml.mjs";

async function fetchAndRenderJacketsHtml() {
  try {
    // Show the loader
    document.querySelector('.loader').style.display = 'block';

    // Fetch the data from the API and store it as 'jackets'
    const jackets = await fetchData(API_URL);

    // Generate HTML for all the jackets
    generateJacketsHtml(jackets);

    // Hide the loader once data is processed
    document.querySelector('.loader').style.display = 'none';
  } catch (error) {
    console.error("Failed to process jackets:", error);
    // Hide the loader if an error occurs
    document.querySelector('.loader').style.display = 'none';
  }
}

fetchAndRenderJacketsHtml();
*/
/*
import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateJacketsHtml } from "./generateJacketsHtml.mjs";
import { cartLink } from "./cartLink.mjs";

document.addEventListener('DOMContentLoaded', function() {
  setupCartLink();  // Set up the cart link handling

document.addEventListener('DOMContentLoaded', function() {
  async function fetchAndRenderJacketsHtml() {
    const loader = document.querySelector('.loader');
    if (!loader) {
      console.error('Loader element not found');
      return;
    }

    try {
      // Show the loader
      loader.style.display = 'block';

      // Fetch the data from the API and store it as 'jackets'
      const jackets = await fetchData(API_URL);

      // Generate HTML for all the jackets
      generateJacketsHtml(jackets);

    } catch (error) {
      console.error("Failed to process jackets:", error);
    } finally {
      // Hide the loader regardless of success or failure
      loader.style.display = 'none';
    }
  }

  fetchAndRenderJacketsHtml();
});
*/

import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateJacketsHtml } from "./generateJacketsHtml.mjs";
import { setupCartLink } from "./cartLink.mjs";  // Ensure this function is correctly named and exported in 'cartLink.mjs'
import { updateCartCount } from './updateCartCount.mjs';
import { handleJacketsFiltering } from "./handleJacketsFiltering.mjs";




document.addEventListener('DOMContentLoaded', function() {
    setupCartLink();  // Set up the cart link handling
    updateCartCount();
    
    async function fetchAndRenderJacketsHtml() {
        const loader = document.querySelector('.loader');
        if (!loader) {
            console.error('Loader element not found');
            return;
        }

        try {
            // Show the loader
            loader.style.display = 'block';

            // Fetch the data from the API and store it as 'jackets'
            const jackets = await fetchData(API_URL);

            // Generate HTML for all the jackets
            handleJacketsFiltering(jackets);

        } catch (error) {
            console.error("Failed to process jackets:", error);
        } finally {
            // Hide the loader regardless of success or failure
            loader.style.display = 'none';
        }
    }

    fetchAndRenderJacketsHtml();
    
});



