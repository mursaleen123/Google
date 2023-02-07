import React from "react";
import { Link } from "react-router-dom";

import lightSvg from "../assets/svg/light.svg";
import nightSvg from "../assets/svg/night.svg";
import logoSvg from "../assets/svg/logo.svg";
import Search from "./Search";

export default function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-2xl font-bold text-white py-1 px-2 rounded dark:text-gray-900">
            <img src={logoSvg} alt="logo" />
          </p>
        </Link>
        <Search />

        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? (
            <img src={lightSvg} alt="Light Logo" />
          ) : (
            <img src={nightSvg} alt="Night Logo" />
          )}
        </button>
      </div>
    </div>
  );
}
