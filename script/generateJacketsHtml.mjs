
import { generateSingleJacketHtml } from './generateSingleJacketHtml.mjs';

function generateJacketsHtml(jackets) {
  const jacketsContainer = document.querySelector("#jacketsSection");
  jacketsContainer.innerHTML = "";

  jackets.forEach(jacket => {
    const jacketHtml = generateSingleJacketHtml(jacket);
    jacketsContainer.appendChild(jacketHtml);
  });
}

export { generateJacketsHtml };