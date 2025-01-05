const needle = require('needle');

const breedNameDescription = (breedName) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (err, res) => {
    if (err) {
      console.error('Error:', err);
      return;
    }

    // Let's print the response body to see what we get
    console.log(res.body);

    // Access the first entry and print out the description, if it exists
    if (res.body.length > 0) {
      console.log('Description:', res.body[0].description);
    } else {
      console.log('Breed not found.');
    }
  });
};

// Let's say you want to call this function with a command-line argument
const breedName = process.argv[2];
breedNameDescription(breedName);