const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetching details:', error);
  } else if (description) {
    console.log('Description:', description);
  } else {
    console.log('Breed not found.');
  }
});