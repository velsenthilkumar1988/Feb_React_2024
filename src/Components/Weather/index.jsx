import { useState } from "react";
import SearchComponent from "../Search";
import { useEffect } from "react";
import "../Search/style.css";

export default function WeatherComponent() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=0f03d7858b4645c212deb23d74bc6fc0`
      );
      const data = await response.json();
      console.log("====================================");
      console.log(data, "data");
      console.log("====================================");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }
  async function handleSearch() {
    fetchWeatherData(search);
  }
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  useEffect(() => {
    fetchWeatherData("thuraiyur");
  }, []);

  return (
    <div className="weather-container">
      <SearchComponent
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">
            {weatherData?.main?.temp}
            {/* <h2>{weatherData?.weather[0]?.description}</h2> */}
          </div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
                <div>
                    <p className="wind">{weatherData?.wind.speed}</p>
                    <p>Wind Speed</p>
                </div>
            </div>
            <div className="column">
                <div>
                    <p className="humidity">{weatherData?.main.humidity}%</p>
                    <p>Humidity</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
