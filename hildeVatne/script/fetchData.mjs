//import { loader } from "./loader.mjs";

/*
export async function fetchData(url, toggleLoader) {
  try {
    toggleLoader(true);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    toggleLoader(false);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
}
*/

// Assuming loader is a class that manages its own display
import { loader } from "./loader.mjs";

export async function fetchData(url) {
  const loading = new loader();  // Instantiate the loader
  loading.inject();  // Show the loader

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  } finally {
    loading.remove();  // Hide the loader after fetching or if an error occurred
  }
}


