import React, { useEffect, useState } from "react";
import { useCurrentWeatherInfo } from "../hook/useCurrentWeatherInfo";
import WeatherTemplate from "./WeatherTemplate";

function YourWeather(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const lat = props.lat;
  const lon = props.lon;

  const API_KEY = `28bf3786760515ae71902aaababaaa92`;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  async function fetchData() {
    try {
      setLoading(true);
      const result = await fetch(url);
      const response = await result.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error("Bhai error hai YourWeather me");
    }
  }
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="flex flex-col items-center gap-4 mb-[2rem]">
      {loading ? (
        <h1 className="h-[100vh] text-white text-3xl font-extrabold">
          Loading....
        </h1>
      ) : (
        <WeatherTemplate data={data}/>
      )}
    </div>
  );
}

export default YourWeather;
