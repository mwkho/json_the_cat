const request = require('request');

const breed = process.argv[2];
const URL = 'https://api.thecatapi.com/v1/breeds/search?name=' + breed;



request(URL, (error, response, body) => {
  if (error) {
    console.log("There was an error on the page\n Error Message:\n", error);
    return;
  }
  const data =  JSON.parse(body);
  const firstResult = data[0];
  if (!firstResult) {
    console.log("You have inputted an invalid cat breed.");
    return;
  }
  console.log(firstResult.description);
});