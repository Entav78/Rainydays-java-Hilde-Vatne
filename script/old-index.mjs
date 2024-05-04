
import { API_URL } from "./constants.mjs";

async function fetchData() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const products = await response.json();
    const container = document.getElementById('products');
    container.innerHTML = '';  

    products.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        const img = document.createElement('img');
        img.classList.add('img-products');
        img.src = item.image;
        img.alt = item.title;
        card.appendChild(img);
        const title = document.createElement('h3');
        title.textContent = item.title;
        card.appendChild(title);

        if (item.description) {
            const description = document.createElement('p');
            description.textContent = item.description;
            card.appendChild(description);
        }

        const price = document.createElement('p');
        price.textContent = `Price: $${item.price.toFixed(2)}`;
        card.appendChild(price);

        if (item.onSale && item.discountedPrice) {
            const discountedPrice = document.createElement('p');
            discountedPrice.textContent = `Sale Price: $${item.discountedPrice.toFixed(2)}`;
            discountedPrice.style.color = 'red';
            card.appendChild(discountedPrice);
        }

        container.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function filterProduct(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(searchInput) ? 'block' : 'none';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  fetchData();
  filterProduct('all');
});




