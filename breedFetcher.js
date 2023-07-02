const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {

      callback(error, null);

    } else {

      const data = JSON.parse(body);

      if (body === "[]") {
        error = 'requested breed not found';
        callback(error, null);
      } else {
        callback(null, data[0].description);
      }

    }

  });
  
};

module.exports = { fetchBreedDescription };