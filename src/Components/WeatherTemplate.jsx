import React from "react";

function WeatherTemplate({ data }) {
  const src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
  const weatherSrc = `https://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <h2 className="text-2xl font-bold text-white">{data.name}</h2>
          <img src={src} width={45} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white text-xl">
            {data?.weather?.[0]?.description}
          </p>
          <img src={weatherSrc} alt="" />
          <h2 className="text-white font-bold text-3xl">
            {Math.floor(data?.main?.temp / 10)} °C
          </h2>
        </div>
        <div className="flex mt-16 gap-6 text-white mb-[4.2rem]">
          <div className="w-[220px] flex flex-col items-center bg-white bg-opacity-25 text-white py-6 gap-2">
            <img src="../src/assets/wind.png" width={70} />
            <p>WINDSPEED</p>
            <p>{data?.wind?.speed} m/s</p>
          </div>
          <div className="w-[220px] flex flex-col items-center bg-white bg-opacity-25 py-6 gap-2">
            <img src="../src/assets/humidity.png" width={70} />
            <p>HUMIDITY</p>
            <p>{data?.main?.humidity}%</p>
          </div>
          <div className="w-[220px] flex flex-col items-center bg-white bg-opacity-25 py-6 gap-2">
            <img src="../src/assets/cloudy.png" width={70} />
            <p>CLOUDS</p>
            <p>{data?.clouds?.all}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherTemplate;
