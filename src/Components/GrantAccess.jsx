import React, { useState } from "react";
import YourWeather from "./YourWeather";
import location from "../assets/location.png"

function GrantAccess() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  function getAccess() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }

  return (
    <div>
      {lat && lon ? (
        <YourWeather lat={lat} lon={lon} />
      ) : (
        <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src={location} alt="" width={150}/>
            <h2 className="text-white text-3xl font-medium">We need your location access</h2>
          <button onClick={getAccess} className="w-[8.8rem] outline outline-gray-700 hover:outline-gray-200 rounded-md text-white font-medium">
            Get Access Here
          </button>
        </div>
      )}
    </div>
  );
}

export default GrantAccess;
