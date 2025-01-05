const needle = require('needle');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (err, res) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (res.body.length > 0) {
      // Pass null for error and the description for the result
      callback(null, res.body[0].description);
    } else {
      // No breed found, pass null for error and null for description
      callback(null, null);
    }
  });
};

module.exports = { fetchBreedDescription };