//link API https://api.noroff.dev/api/v1/rainy-days



async function fetchData() {
  try {
    const response = await fetch('https://api.noroff.dev/api/v1/rainy-days');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    // Assuming 'data' is an array of objects and each has 'imageUrl', 'title', and 'description' properties
    const container = document.getElementById('image-container');
    container.innerHTML = '';  // Clear existing content

    data.forEach(item => {
        // Create a div to hold the image and text
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('product');  // Add a class for styling if needed

        // Create and append the image
        const img = document.createElement('img');
        img.src = item.image;  // Ensure this matches your actual data structure
        img.alt = item.title || 'Product Image';  // Use the title as alt text if available
        itemDiv.appendChild(img);

        // Create and append the title
        const title = document.createElement('h3');
        title.textContent = item.title;
        itemDiv.appendChild(title);


        // Create and append the description if it exists
        if (item.description) {
            const description = document.createElement('p');
            description.textContent = item.description;
            itemDiv.appendChild(description);
        }

         // Create and append the price
         const price = document.createElement('p');
         price.textContent = `Price: $${item.price.toFixed(2)}`;
         itemDiv.appendChild(price);
 
         // Check if the item is on sale and display discounted price
         if (item.onSale && item.discountedPrice) {
             const discountedPrice = document.createElement('p');
             discountedPrice.textContent = `Sale Price: $${item.discountedPrice.toFixed(2)}`;
             discountedPrice.style.color = 'red';  // Style the sale price to make it stand out
             itemDiv.appendChild(discountedPrice);
         }

        // Append the whole item div to the container
        container.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
}

// Call the fetchData function to initiate the API request
fetchData();