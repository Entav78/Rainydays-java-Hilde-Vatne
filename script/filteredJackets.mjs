// filter.mjs
/*
import { generateJacketsHtml } from './generateJacketsHtml.mjs';

export function handleJacketsFiltering(jackets, genderFilter) {
  const filteredJackets = jackets.filter((currentJacket) => {
    if (genderFilter === 'all') return true;
    return currentJacket.gender.toLowerCase() === genderFilter;
  });

  generateJacketsHtml(filteredJackets);
}
*/



export function filteredJackets(jackets, genderFilter) {
  return jackets.filter((currentJacket) => {
    if (genderFilter === 'all') return true;
    if (genderFilter === 'female' && currentJacket.gender.toLowerCase() === 'female') return true;
    if (genderFilter === 'male' && currentJacket.gender.toLowerCase() === 'male') return true;

    return false;
  });
}


