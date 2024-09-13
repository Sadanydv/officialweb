import React from "react";
import image from "./images/yaks.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-100 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 pl-6 ">
        <div className="ml-10">
          <Link to="/" className="flex items-center">
            <img src={image} alt="Logo" className="w-12 h-12 rounded-full" />
            <h1 className="text-2xl font-bold ml-4">
              Yaks
              <span className="text-blue-700">Incorporation</span>
            </h1>
          </Link>
        </div>
        <div className="flex space-x-10 pr-20 mr-9 ">
          <Link
            to="/about"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/project"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/service"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
