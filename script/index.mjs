

import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
//import { generateJacketsHtml } from "./generateJacketsHtml.mjs";
import { setupCartLink } from "./cart/cartLink.mjs";  // Ensure this function is correctly named and exported in 'cartLink.mjs'
import { updateCartCount } from './cart/updateCartCount.mjs';
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



