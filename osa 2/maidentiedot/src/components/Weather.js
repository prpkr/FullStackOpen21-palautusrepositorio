import React, { useState, useEffect } from "react";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
  console.log(apiKey);

  useEffect(() => {
    if (props.capital) {
      setIsLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.capital}&appid=${apiKey}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [props.capital, apiKey]);

  return (
    <div>
      <h2>Weather in {props.capital}</h2>
      {isLoading ? (
        <p>Loading weather data...</p>
      ) : weatherData && weatherData.main ? (
        <div>
          <p>
            Temperature: {weatherData.main.temp}°C
          </p>
          <p>
            Weather: {weatherData.weather[0].description}
          </p>
        </div>
      ) : (
        <p>Unable to fetch weather data</p>
      )}
    </div>
  );
};

export default Weather;
