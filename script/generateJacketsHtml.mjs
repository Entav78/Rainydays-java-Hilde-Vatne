import { generateSingleJacketHtml } from './generateSingleJacketHtml.mjs'

function generateJacketsHtml(jackets) {
  const jacketsContainer = document.querySelector("#jacketsSection");
  for (let i = 0; i < jackets.length; i++) {
    const jacketHtml = generateSingleJacketHtml(jackets[i]);
    console.log(jacketHtml);
    jacketsContainer.appendChild(jacketHtml);
  }
}

export {generateJacketsHtml}; 