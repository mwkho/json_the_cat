const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const URL = 'https://api.thecatapi.com/v1/breeds/search?name=' + breedName;
  request(URL, (error, response, body) => {
    let errorMsg;  
    if (error) {
      errorMsg = "There was an error on the page\n Error Message:\n" + error;
      callback(errorMsg, null);
      return;
    }
    const data =  JSON.parse(body);
    const result = data[0];
  
    if (!result) {
      errorMsg = "You have inputted an invalid cat breed.";
      callback(errorMsg, null);
      return;
    }
    callback(null,result.description);
  });
 }


 module.exports ={
   fetchBreedDescription
 }