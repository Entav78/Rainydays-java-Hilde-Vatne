
import { loader } from "./loader/loaderJackets.mjs";

export async function fetchData(url) {
  const loading = new loader();
  loading.inject();

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
    loading.remove();
  }
}


