//Set up Http Request
var xhr = new XMLHttpRequest();

//create and send Get request
//GET,POST,PUT,DELETE,
// Second =>ENdpoint of the url:server url
xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
// set up our listener to process the request
xhr.onload = function () {
  //process the request and server will return the data
  if (xhr.status >= 200 && xhr.status < 300) {
    //converting the raw data into js notation format
    var t = JSON.parse(this.response);
    console.log(t);

    for (let i = 0; i < t.length; i++) {
      console.log(`
        Country: ${t[i].name}
        Population:${t[i].population}
        Region:${t[i].region}
        Currency:${t[i].currencies[0].code}
        `);
    }
  } else {
    //it should not give you data
    console.log("Data is not available");
  }
};

xhr.send();

// fetch,async,await,axios

// API=>Application programming interface

// Restaurent website
// Food items

// 1.name
// 2.population
// 3.region
// 4.currency

// 1.id
// 2.Name
// 3.email
// 4.city
// 5.phone
