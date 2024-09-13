import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 m-1 mb-0 h-74 flex flex-col">
      <div className="main-div flex flex-col justify-between items-center">
        {/* Social Media & Email Section */}
        <div className="flex flex-col items-center space-y-4 md:items-start md:space-y-0 md:space-x-4 md:flex-row mb-4 md:mb-0 border-t-4 border-b-4 border-gray-500">
          {/* Added horizontal borders */}
          <div className="flex space-x-14 px-4 py-2">
            {/* Increased space between icons */}
            <a
              href="https://facebook.com"
              className="text-white hover:text-blue-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-blue-700"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="mailto:info@yakincorpporation.com"
              className="text-white hover:text-gray-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:text-right pr-7 m-7 ">
          <h1 className="text-2xl font-bold">YAKS INCORPORATION</h1>
          <p className="text-sm">© 2024 | All Rights Reserved</p>
        </div>

        <div className="flex flex-row items-center md:items-start  space-x-12">
          <a href="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms-and-conditions" className="hover:text-gray-200">
            Terms and Conditions
          </a>
          <a href="/cookies" className="hover:text-gray-300">
            Cookies
          </a>
          <a href="/website-accessibility" className="hover:text-gray-300">
            Website Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
