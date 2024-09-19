import React from "react";
import image1 from "./images/CEO.png";
import image2 from "./images/CEO.png";
import image3 from "./images/CEO.png";

const articles = [
  {
    id: 1,
    image: image1,
    date: "September 17, 2024",
    heading: "Inspire meets brands with digital technology",
    paragraph:
      "In today's competitive landscape, where technology drives business success, the integration of digital solutions with brand strategies is essential. The synergy between digital technology and branding enables companies to create immersive customer experiences, foster innovation, and enhance their market presence",
  },
  {
    id: 2,
    image: image2,
    date: "September 18, 2024",
    heading: "Empower businesses through digital solutions.",
    paragraph:
      "Empowering businesses with cutting-edge digital solutions is key to staying ahead in the ever-evolving marketplace. By leveraging innovative technologies, companies can streamline operations, boost productivity, and deliver enhanced customer experiences, driving sustainable growth and competitive advantage",
  },
  {
    id: 3,
    image: image3,
    date: "September 19, 2024",
    heading: "Transform companies with advance technology.",
    paragraph:
      "Transforming companies with advance technology enables organizations to adapt to the rapidly changing digital landscape. By integrating the latest innovations, businesses can improve efficiency, reduce costs, and create new opportunities for growth, staying ahead of competitors in an increasingly tech-driven world",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50 pb-[150px]">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-400 ">Our Blogs</h1>
      <h2 className="text-xl text-center font-medium mb-8">
        Boost Your Business with <span className="text-blue-400">Digital</span> Transformation
      </h2>
      <div className="bg-blue-50">
        <div className="big_div grid grid-cols-1 md:grid-cols-3 gap-[70px] ">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-50 p-4 shadow-lg rounded-lg">
              <img
                src={article.image}
                alt={`Article ${article.id}`}
                className="w-[full] h-70 object-cover rounded-t-lg"
              />
              <div className=" flex flex-col items-start">
                <p className="text-gray-900 mt-4">Date: {article.date}</p>
                <h3 className="text-lg font-semibold text-blue-500 mt-2">
                  {article.heading}
                </h3>
                <p className="text-left text-gray-600  ">{article.paragraph}</p>
                <button className="text-blue-400 font-semibold italic pb-4">
                  readmore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
