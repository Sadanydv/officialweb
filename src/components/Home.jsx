import React from "react";
import Transformidea from "./Transformidea";
import ImageRotator from "./ImageRotator";
import { useNavigate } from "react-router-dom";
import "./CSS/style.css";
import Whychoose from "./Whychoose";
import Whychoosesecond from "./Whychoosesecond";
import Video from "./Video";
import Blog from "./Blog";
import Faq from "./Faq";

function Home() {
  const navigate = useNavigate();

  const handleLetsTalkClick = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div className="w-full p-8 bg-gray-50">
        <div className="container mx-auto bg-white shadow-lg p-8 rounded flex">
          <div className="flex flex-col ml-7">
            <div className="mb-8 flex-grow">
              <Transformidea />
            </div>
            <div className="flex-1 ml-9 flex flex-col justify-start">
              <div className="mb-8">
                <p className="text-lg sm:text-xl lg:text-xl max-w-lg bg-slate-100">
                  Our mission is to provide cutting-edge tech solutions that
                  drive efficiency, foster innovation, and deliver unparalleled
                  value to our clients.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-lg sm:text-xl lg:text-xl max-w-lg bg-slate-100 ">
                  Contact us with a project or an idea you have. We will contact
                  you regarding the costs and time for developing it in record
                  time.
                </p>
              </div>

              <div>
                <button
                  onClick={handleLetsTalkClick}
                  className="homeBtn relative border border-blue-300 border-l-[3.5px] text-black px-7 py-3 rounded-lg transition duration-200 hover:bg-customPink hover:text-black "
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-1 ml-8">
            <div className="w-full h-full max-w-2xl max-h-2xl relative flex items-center">
              <ImageRotator />
            </div>
          </div>
        </div>
      </div>
      <Whychoose />
      <Whychoosesecond />
      <Video />
      <Blog />
      <Faq />
    </div>
  );
}
export default Home;
