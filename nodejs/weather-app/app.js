const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=a141668153bac81307a95badf2420f00&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
  console.log(
    data.current.weather_descriptions +
      ". It is currently " +
      data.current.temperature +
      " degrees out. There is a " +
      data.current.precip +
      " chance of rain."
  );
});
