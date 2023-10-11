import React, { useState } from "react";
import WeatherTemplate from "./WeatherTemplate";

function SearchWeather() {
  const [inputValue, setInputValue] = useState("");

  const API_KEY = `28bf3786760515ae71902aaababaaa92`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [teller, setTeller] = useState(false);

  async function handlerSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setTeller(true);
      const result = await fetch(url);
      const response = await result.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error("Bhai fetchData me error aagya hai...", error);
      setData([]);
    }
  }


  return (
    <div>
      <div className=" flex items-center justify-center gap-2 mb-20">
        <input
          type="text"
          placeholder="Enter your city name..."
          className="rounded-lg p-1"
          onChange={(value) => setInputValue(value.target.value)}
          value={inputValue}
        />
        <button
          onClick={handlerSubmit}
          className="text-white w-[4rem] outline outline-gray-700 hover:outline-gray-200 rounded-lg"
        >
          Search
        </button>
      </div>
      {loading ? (
        <h1 className="h-[100vh] text-white text-3xl font-extrabold">
          Loading....
        </h1>
      ) : (
        teller ? (<WeatherTemplate data={data} />) : (<p className="h-[60vh]"></p>)
      )}
    </div>
  );
}

export default SearchWeather;
