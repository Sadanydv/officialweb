import React, { useEffect, useState } from "react";
import image1 from "./images/VAYU.png";
import image2 from "./images/FMS.png";
import image3 from "./images/AMS.png";
import image4 from "./images/GBT.png";

const projects = [
  {
    title: "Vayu",
    description: "Air Pollution Monitoring System",
    image: image1,
    backgroundColor: "#E3F2FD",
  },
  {
    title: "Fire Fighter",
    description: "Fire Detection System",
    image: image2,
    backgroundColor: "#FFF3E0",
  },
  {
    title: "Schoole",
    description: "Academic Event Management Platform",
    image: image3,
    backgroundColor: "#F3E5F5", 
  },
  {
    title: "GTS",
    description: "Garbage Tracking System",
    image: image4,
    backgroundColor: "#E8F5E9", 
  },
];

const Project = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newIndex = Math.floor(scrollY / windowHeight);

      setVisibleIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="project" className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
      <div className="mb-8 mt-9 flex flex-col items-center">
        <h2 className="text-6xl mb-3 ml-12">
          Explore Our <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-800 ml-12 text-1xl">
          Our projects combine creative ideas with practical
          <br />
          solutions, making them both distinctive and impactful.
        </p>
      </div>

      <div className="projects-container relative mt-14">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item ${index <= visibleIndex ? "show" : ""} ${
              index === visibleIndex ? "sticky" : ""
            } rounded-lg shadow-lg overflow-hidden h-[500px]`}
            style={{
              backgroundColor: project.backgroundColor,
              zIndex: projects.length - index,
              transform: `translateY(${
                index <= visibleIndex ? "0" : `calc(${index * 500}px)`
              })`,
              top: 0,
            }}
          >
            <div className="flex-1 p-8 flex flex-col justify-between mt-9">
              <div>
                <h3 className="text-3xl font-semibold mb-3 ml-3 pt-9">
                  {project.title}
                </h3>
                <p className="p-3 text-black text-2xl">{project.description}</p>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
