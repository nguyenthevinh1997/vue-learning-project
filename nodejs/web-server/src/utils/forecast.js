const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a141668153bac81307a95badf2420f00&query=" +
    latitude +
    "," +
    longitude;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          ". It is currently " +
          body.current.temperature +
          " degrees out. There is a " +
          body.current.precip +
          " chance of rain."
      );
    }
  });
};

module.exports = forecast;
