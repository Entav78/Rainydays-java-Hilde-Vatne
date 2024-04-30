



export function filteredJackets(jackets, genderFilter) {
  return jackets.filter((currentJacket) => {
    if (genderFilter === 'all') return true;
    if (genderFilter === 'female' && currentJacket.gender.toLowerCase() === 'female') return true;
    if (genderFilter === 'male' && currentJacket.gender.toLowerCase() === 'male') return true;

    return false;
  });
}


