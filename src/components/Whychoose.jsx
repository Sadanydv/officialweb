import React from "react";
import image1 from "./images/whychoose.png";

function Whychoose({
  title = "About Yaks Incorporation", 
  subtitle = "Pioneering the Future of Software Development", 
  paragraphs = [
    "At Yaks Incorporation, we believe in the transformative power of software. We are a team of dedicated professionals committed to developing innovative solutions that drive growth and efficiency. Our expertise spans across various domains, enabling us to deliver comprehensive software solutions tailored to your business needs."
  ],
  headings = [
    "Dedicated team of experienced professionals",
    "Custom software solutions tailored to your needs",
  ],
  image = image1,
  reverse = false
}) {
  return (
    <div className="container bg-gray-50 mx-auto pb-[100px] pt-[100px] p-4 flex flex-row">
      {reverse ? (
        <div className="first_div w-1/2 mt-[60px] space-x-8 space-y-7">
          <h1 className="text-2xl font-bold text-blue-500 ml-8">{title}</h1>

          <h2 className="text-4xl font-semibold">{subtitle}</h2>

          {paragraphs.map((paragraph, index) => (
            <div key={index} className="w-[500px] h-auto flex">
              <p className="text-left text-gray-500 text-lg">{paragraph}</p>
            </div>
          ))}

          <div>
            {headings.map((heading, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="border-2 border-blue-300 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-blue-700 font-bold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h1 className="text-sm font-semibold">{heading}</h1>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="first_div w-1/2">
          <img src={image} alt="Why Choose Us" className="rounded-3xl h-[600px] w-[700px]" />
        </div>
      )}
      {reverse ? (
        <div className="second_div w-1/2">
          <img src={image} alt="Why Choose Us" className="rounded-3xl h-[600px] w-[700px]" />
        </div>
      ) : (
        <div className="second_div mt-[60px] w-1/2 space-x-8 space-y-7">
          <h1 className="text-2xl font-bold text-blue-500 ml-8">{title}</h1>

          <h2 className="text-4xl font-semibold">{subtitle}</h2>

          {paragraphs.map((paragraph, index) => (
            <div key={index} className="w-[500px] h-auto flex">
              <p className="text-left text-gray-500 text-lg">{paragraph}</p>
            </div>
          ))}

          <div>
            {headings.map((heading, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="border-2 border-blue-300 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-blue-700 font-bold"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 011.414 0l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h1 className="text-sm font-semibold">{heading}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Whychoose;