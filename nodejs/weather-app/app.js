const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=a141668153bac81307a95badf2420f00&query=37.8267,-122.4233";

// request({ url: url }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else {
//     const data = JSON.parse(response.body);
//     console.log(data.current);
//     console.log(
//       data.current.weather_descriptions +
//         ". It is currently " +
//         data.current.temperature +
//         " degrees out. There is a " +
//         data.current.precip +
//         " chance of rain."
//     );
//   }
// });

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoidmluaHZpbmgyMjEyMyIsImEiOiJja2N3cnB0b3AwZ3kyMzJxN2Q5aHpzdnl2In0.NMBburgxKMZVWfiRZZZ30g";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
