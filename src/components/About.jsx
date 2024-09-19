import React from "react";
import Team from "./Team";
import AboutFirst from "./AboutFirst";

const About = () => {
  return (
    <div id="about" className="container mx-auto p-4 bg-gray-50 ">
      <AboutFirst />
      <Team />
    </div>
  );
};

export default About;
