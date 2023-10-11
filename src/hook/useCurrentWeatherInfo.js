import { useEffect } from "react";
import { useState } from "react";

export function useCurrentWeatherInfo() {
  // Data's Link
  
  // https://api.openweathermap.org/data/2.5/weather?q=Ludhiana&appid=28bf3786760515ae71902aaababaaa92

  // States

  
  async function fetchData() {
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
}
