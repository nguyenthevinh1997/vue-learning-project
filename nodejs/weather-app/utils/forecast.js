const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a141668153bac81307a95badf2420f00&query=" +
    latitude +
    "," +
    longitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      const data = response.body;
      callback(
        undefined,
        data.current.weather_descriptions +
          ". It is currently " +
          data.current.temperature +
          " degrees out. There is a " +
          data.current.precip +
          " chance of rain."
      );
    }
  });
};

module.exports = forecast;
