import React from "react";
import Innovation from "./images/innovation.png";
import TrackRecord from "./images/TrackRecord.png";

const AboutFirst = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gray-400 p-6 h-[570px] w-[1200px] rounded-lg shadow-md flex flex-row ">
        
        <div className="w-[600px] pl-9 pt-9 ">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="text-gray-900 mb-6 pt-3 text-justify">
            Yaks Inc., your trusted partner in innovative IT solutions.
            Established with a vision to empower businesses through cutting-edge
            technology, we specialize in website and mobile application
            development. Our team of dedicated professionals is committed to
            delivering tailor-made solutions that not only meet but exceed our
            clients' expectations.
          </p>
          <div className="flex flex-col space-y-4 pt-6 ">
            
            <div className="flex items-center p-2 border-none w-[280px] h-[40px] rounded-[21px] bg-gray-300">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mr-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg ">Innovative IT Solutions</h2>
            </div>
            
            <div className="flex items-center p-2 border-none w-[280px] h-[40px] rounded-[21px] bg-gray-300">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 mr-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg ">Client-Centric Approach</h2>
            </div>
            
            <div className="flex items-center p-2 border-none w-[280px] h-[40px] rounded-[21px] bg-gray-300">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 mr-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg ">Experienced Team</h2>
            </div>
            
            <div className="flex items-center p-2 border-none w-[280px] h-[40px] rounded-[21px] bg-gray-300">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 mr-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg ">Quality & Reliability</h2>
            </div>
          </div>
        </div>

        <div className="w-[600px] flex items-center justify-center">
          <div className="bg-red-900 w-[500px] h-[500px] flex items-center">
            <div className="container mx-auto p-4 bg-gray-500 rounded-lg shadow-lg">
              <h1 className="text-l text-blue-400 font-semibold mb-2">
                Why Choose Us
              </h1>
              <h2 className="text-3xl font-semibold mb-12">
                Stay ahead with cutting-edge{" "}
                <span className="text-blue-400">technology</span>
              </h2>

              <div className="empty-div1 h-32 border border-blue-100 p-3 rounded-l mb-4 flex flex-col items-start">
                <div className="flex flex-row items-center ">
                  <img
                    src={Innovation}
                    alt="Cutting Edge Technology Icon"
                    className="w-12 h-12 mr-2"
                  />
                  <h1 className="text-2xl font-semibold">
                    Cutting-Edge Technology
                  </h1>
                </div>
                <p className="text-left">
                  We stay up-to-date with the latest technologies and trends to
                  provide you with the best possible solutions.
                </p>
              </div>

              <div className="empty-div2 h-32 border border-blue-100 rounded-l mb-4 flex flex-col items-start p-3">
            
                <div className=" flex flex-row items-center ">
                  <img
                    src={TrackRecord}
                    alt="Proven Track Record Icon"
                    className="w-12 h-12 mr-2"
                  />
                  <h1 className="text-2xl font-semibold">
                    Proven Track Record
                  </h1>
                </div>
                <p className="text-left">
                  We have a history of delivering successful projects across
                  various industries.
                </p>
              </div>

              <button className=" text-white py-2 px-4 rounded font-semibold hover:text-blue-400 italic">
                readmore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirst;
