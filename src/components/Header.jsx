import React from "react";
import image from "./images/yaks.png";
import { Link } from "react-router-dom";
import useScrollToSection from "./useScrollToSection";
import { useNavigate } from "react-router-dom";

const Header = () => {
  useScrollToSection('home', 100);
  useScrollToSection('about', 100);
  useScrollToSection('project', 100);
  useScrollToSection('contact-section', 100);

  const navigate = useNavigate();

  const handleLetsTalkClick = () => {
    navigate("/contact");
  };

  return (
    <header className="sticky top-0 bg-gray-50 z-50">
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
        <div className="flex space-x-10 pr-10 ">
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
        <div className="pr-9" >
          <button className="btn relative text-white px-10 py-4 rounded-lg " onClick={handleLetsTalkClick} >
            Connect
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
