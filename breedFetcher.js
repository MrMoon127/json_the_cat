const request = require('request');

const args = process.argv.slice(2);



request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

  if (error) {

    console.log("error: ", error);

  } else {

    const data = JSON.parse(body);

    if (body === "[]") {
      console.log("requested breed not found :(");
    } else {
      console.log(data[0].description);
    }

  }

});