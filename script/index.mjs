//link API https://api.noroff.dev/api/v1/rainy-days

/*

// Ensure this constant is at the top of your script file
import { API_URL } from './constant.mjs';

async function fetchData() {
  try {
    // Logging the URL to verify it's correct
    console.log("Fetching data from:", API_URL);

    const response = await fetch(API_URL);
    console.log("Response:", response);
    
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log("Data received:", data); // Logs the data received to ensure it's correct

    const container = document.getElementById('image-container');
    container.innerHTML = '';  // Clear existing content

    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title || 'Product Image';
        itemDiv.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = item.title;
        itemDiv.appendChild(title);

        if (item.description) {
            const description = document.createElement('p');
            description.textContent = item.description;
            itemDiv.appendChild(description);
        }

        const price = document.createElement('p');
        price.textContent = `Price: $${item.price.toFixed(2)}`;
        itemDiv.appendChild(price);

        if (item.onSale && item.discountedPrice) {
            const discountedPrice = document.createElement('p');
            discountedPrice.textContent = `Sale Price: $${item.discountedPrice.toFixed(2)}`;
            discountedPrice.style.color = 'red';
            itemDiv.appendChild(discountedPrice);
        }

        container.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function to initiate the API request
fetchData();

*/

// Importing API_URL from constant.mjs
import { API_URL } from "./constants.mjs";

async function fetchData() {
  try {
    // Logging the URL to verify it's correct
    console.log("Fetching data from:", API_URL);

    const response = await fetch(API_URL);
    console.log("Response:", response);
    
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log("Data received:", data); // Logs the data received to ensure it's correct

    const container = document.getElementById('image-container');
    container.innerHTML = '';  // Clear existing content

    data.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title || 'Product Image';
        itemDiv.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = item.title;
        itemDiv.appendChild(title);

        if (item.description) {
            const description = document.createElement('p');
            description.textContent = item.description;
            itemDiv.appendChild(description);
        }

        const price = document.createElement('p');
        price.textContent = `Price: $${item.price.toFixed(2)}`;
        itemDiv.appendChild(price);

        if (item.onSale && item.discountedPrice) {
            const discountedPrice = document.createElement('p');
            discountedPrice.textContent = `Sale Price: $${item.discountedPrice.toFixed(2)}`;
            discountedPrice.style.color = 'red';
            itemDiv.appendChild(discountedPrice);
        }

        container.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function to initiate the API request
fetchData();

