const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];

// New York Philadephia
if (!address) {
  console.log("Please provide an address");
} else {
  console.log(address);
  geocode(address, (error, data) => {
    if (error) return console.log(error);
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) return console.log(error);
      else {
        console.log("Data", data.location);
        console.log(forecastData);
      }
    });
  });
}

// forecast(44.1545, -75.7088, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });
