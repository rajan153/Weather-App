import React from "react";
import { NavLink } from "react-router-dom";

function Options() {
  return (
    <div className="text-white font-serif flex justify-between w-[760px] text-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-white bg-opacity-25 rounded-xl w-[130px] py-1"
              : "py-1 w-[130px] bg-transparent "
          }`
        }
      >
        Your Weather
      </NavLink>
      <NavLink
        to="search"
        className={({ isActive }) =>
          `${
            isActive
              ? "bg-white bg-opacity-25 rounded-xl w-[130px] py-1"
              : "py-1 w-[130px] bg-transparent "
          }`
        }
      >
        Search Weather
      </NavLink>
    </div>
  );
}

export default Options;
