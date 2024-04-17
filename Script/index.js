//ny link API https://api.noroff.dev/api/v1/rainy-days

/*
console.log("hello Kristiansand");

async function fetchData() {
  const response = await fetch('https://api.noroff.dev/api/v1/rainy-days');
  const data = await response.json();
  return data;
}
console.log()

async function displayData() {
  const data = await fetchData();
  const jacketList = document.getElementById("jacket-list");
  jacketList.innerHTML = "";


data.forEach((jacket) => {
  const listItem = document.createElement("li");
  listItem.textContent = jacket.setup;
  listItem.addEventListener("click", () => {
    window.location.href = 'jacket-details.html?id=${jacket.id'});
});
  jacketList.appendChild(listItem);

}*/
/*
async function fetchData() {
  const response = await fetch('https://api.noroff.dev/api/v1/rainy-days');
  const data = await response.json();
  return data;
}

function displayProducts() {
  fetchData()
    .then(data => {
      console.log('Products:', data);
      // Here, you can process the data or display it on the UI
    })
    .catch(error => {
      console.error('Failed to fetch products:', error);
    });
}*/

/*
async function fetchData() {
    try {
        // Make an API request using fetch() and await the response
        const response = await fetch('https://api.noroff.dev/api/v1/rainy-days');

        // Check if the response is successful (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the response body as JSON and await the result
        const data = await response.json();

        // Now you can work with the data obtained from the API
        console.log(data);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to initiate the API request
fetchData();
*/
/*
async function fetchData() {
  try {
      const response = await fetch('https://api.noroff.dev/api/v1/rainy-days');
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      // Assuming 'data' is an array of objects and each has an 'imageUrl' property
      const container = document.getElementById('image-container');
      container.innerHTML = '';  // Clear existing content

      data.forEach(item => {
          const img = document.createElement('img');
          img.src = item.imageUrl;  // Adjust 'imageUrl' based on your data structure
          img.alt = 'Product Image';  // Provide a meaningful alternative text
          container.appendChild(img);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Call the fetchData function to initiate the API request
fetchData();
*/

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

        // Append the whole item div to the container
        container.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  
}

// Call the fetchData function to initiate the API request
fetchData();
/*
data.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('product');

  const img = document.createElement('img');
  img.src = item.image;  // Using 'item.image' instead of 'item.imageUrl'
  img.alt = item.title || 'Product Image';  // Using the product title as alt text
  itemDiv.appendChild(img);

  const title = document.createElement('h3');
  title.textContent = item.title;
  itemDiv.appendChild(title);

  if (item.description) {
      const description = document.createElement('p');
      description.textContent = item.description;
      itemDiv.appendChild(description);
  }

  const container = document.getElementById('image-container');
  container.appendChild(itemDiv);
});
*/