// Importing API_URL from constant.mjs
import { API_URL } from "./constants.mjs";
import { fetchData } from "./fetchData.mjs";
import { generateJacketsHtml } from "./generateJacketsHtml.mjs";




async function main() {
  // Fetch the data from the API and store it as 'jackets'
  const jackets = await fetchData(API_URL);
  // Generate HTML for all the jackets
  generateJacketsHtml(jackets);
  
} 
/*catch (error) {
  console.error("Failed to process jackets:", error);
}*/
main();
