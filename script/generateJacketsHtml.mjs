/*

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
*/

/*
import { generateSingleJacketHtml } from './generateSingleJacketHtml.mjs';

export function generateJacketsHtmlGeneration(jackets, genderFilter) {
  const jacketsContainer = document.querySelector('#jacketsSection');
  // Get the container to display the jackets
  for (let i = 0; i < jackets.length; i++) {
    const jacketHtml = generateSingleJacketHtml(jackets[i]);
    console.log(jacketHtml);
    jacketsContainer.appendChild(jacketHtml);
  }

  // Filter and display jackets based on the specified filter
  jackets
    .filter((currentJacket) => {
      if (genderFilter === 'All') {
        return true;
      }
      if (genderFilter === 'Male' && currentItem.gender === 'Male') {
        return true;
      }
      if (genderFilter === 'Female' && currentItem.gender === 'Female') {
        return true;
      }
    })
    .forEach((currentJacket) => {
      const jacketHtml = generateSingleJacketHtml(currentJacket);
      jacketsContainer.appendChild(jacketHtml);
    });
}


//need to declare currentJacket*/

import { generateSingleJacketHtml } from './generateSingleJacketHtml.mjs';

function generateJacketsHtml(jackets) {
  const jacketsContainer = document.querySelector("#jacketsSection");
  jacketsContainer.innerHTML = ""; // Clear existing content

  jackets.forEach(jacket => {
    const jacketHtml = generateSingleJacketHtml(jacket);
    jacketsContainer.appendChild(jacketHtml);
  });
}

export { generateJacketsHtml };