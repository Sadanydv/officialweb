import React from "react";
import locationImage from "./images/LocationImage1.png";
import locationImage1 from "./images/locationImage.png";

const YksLocation = () => {
  const handleLocationClick = () => {
    const location = "https://www.google.com/maps?q=40.7580,-73.9855"; // Times Square, New York coordinates
    window.open(location, "_blank");
  };

  return (
    <div className="w-[1425px] h-[900px] mt-[150px] ml-12">
      <div className="flex flex-col items-center mb-[70px]">
        <h1 className="text-3xl font-semibold text-blue-600 ">
          Our Location
        </h1>
        <p className=" text-gray-400 italic font-semibold text-lg">visit our place</p>
      </div>
      <div
        className="relative w-full h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(${locationImage1})` }} // Background image applied here
      >
        <div className="absolute inset-0 flex ml-[638px] mt-[250px]">
          <button
            className="cursor-pointer w-24 h-24" // Size of the smaller image
            onClick={handleLocationClick}
          />
        </div>
      </div>
    </div>
  );
};

export default YksLocation;
