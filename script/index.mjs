

import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { setupCartLink } from "./cart/cartLink.mjs";  
import { updateCartCount } from './cart/updateCartCount.mjs';
import { handleJacketsFiltering } from "./handleJacketsFiltering.mjs";




document.addEventListener('DOMContentLoaded', function() {
    setupCartLink();  
    updateCartCount();
    
    async function fetchAndRenderJacketsHtml() {
        const loader = document.querySelector('.loader');
        if (!loader) {
            console.error('Loader element not found');
            return;
        }
        try {
            loader.style.display = 'block';
            const jackets = await fetchData(API_URL);
            handleJacketsFiltering(jackets);
        } catch (error) {
            console.error("Failed to process jackets:", error);
        } finally {
            loader.style.display = 'none';
        }
    }
    fetchAndRenderJacketsHtml();    
});



