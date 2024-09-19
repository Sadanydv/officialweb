import React, { useState, useRef } from "react";
import image1 from "./images/CEO.png"; 
import image2 from "./images/VideoThumbnail.avif"
import videoSrc from "./images/SignalTechnology.mp4";
import rightimg from './images/right-arrow.png';
import leftimg from './images/left-arrow.png';
import playButton from './images/PlayButton.png';

const experts = [
  {
    id: 1,
    name: "Amrit Dhakal",
    role: "CTO",
    description: `Yak. Inc. stands out for their exceptional technical skills and innovative solutions. Their ability to tackle intricate technical challenges and deliver tailored IT solutions is unparalleled. From advanced web development to intricate backend systems, their expertise has significantly contributed to the success of our projects. They are a trusted partner in navigating the ever-evolving tech landscape.`,
    image: image1,
  },
  {
    id: 2,
    name: "Rajan Sharma",
    role: "Senior Mobile Developer",
    description: `Working with Yaks Inc. has been a game-changer for our development projects. Their proficiency in modern tech stacks and their proactive approach to problem-solving has consistently impressed us. Whether it’s optimizing databases or developing robust mobile applications, Yaks Inc. delivers results that are both scalable and reliable.`,
    image: image1,
  },
  {
    id: 3,
    name: "Sagar Khanal",
    role: "Senior Software Engineer",
    description: `Yaks Inc. stands out for their exceptional technical skills and innovative solutions. Their ability to tackle intricate technical challenges and deliver tailored IT solutions is unparalleled. From advanced web development to intricate backend systems, their expertise has significantly contributed to the success of our projects. They are a trusted partner in navigating the ever-evolving tech landscape.`,
    image: image1,
  },
];

const Video = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + experts.length) % experts.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % experts.length);
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container mx-auto p-4 flex bg-gray-50 flex-row items-center justify-center pb-[150px]">
      <div className="first_div flex flex-col w-1/2 space-y-4 items-center ">
        <h1 className="text-2xl font-semibold">What Our Experts Say</h1>

        <div className="inside_div flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-lg mb-4">
          <img
            src={experts[currentIndex].image}
            alt={`${experts[currentIndex].name} Image`}
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />

          <div className="w-full h-[120px] ">
            <p className=" text-gray-900 text-center">
              {experts[currentIndex].description}
            </p>
          </div>

          <div className="flex flex-row space-x-2 items-center pt-6">
            <button
              className=" rounded flex items-center justify-center"
              onClick={handlePrevClick}
            >
              <img
                src={leftimg}
                alt="Left Arrow"
                className="w-[30px] h-full object-contain"
              />
            </button>

            <div className=" w-[190px] flex flex-col items-center">
              <h2 className="text-xl font-bold">
                {experts[currentIndex].name}
              </h2>
              <p className="">{experts[currentIndex].role}</p>
            </div>

            <button
              className="rounded flex items-center justify-center"
              onClick={handleNextClick}
            >
              <img
                src={rightimg}
                alt="Right Arrow"
                className="w-[30px] h-full object-contain"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="second_div mt-8 bg-blue-50 w-1/2 p-4 ml-[90px] relative">
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image2}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-opacity-50 bg-black"
            >
              <img
                src={playButton}
                alt="Play Button"
                className="w-[170px] h-[120px]"
              />
            </button>
          </div>
        )}
        <video
          ref={videoRef}
          className="w-full"
          controls
          onPlay={handleVideoPlay}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
