import React from "react";
import "./CSS/services.css";
import image1 from "./images/webdev1.avif";
import image2 from "./images/mobileapp1.avif";
import image3 from "./images/itsolution.avif";
import image4 from "./images/itconsulting.avif";
import image5 from "./images/Cloudservice1.avif";
import image6 from "./images/dataengineering1.avif";
import useScrollToSection from './useScrollToSection';

const services = [
  {
    id: "service1",
    title: "Custom Web Development",
    description: "We create bespoke websites that are not only visually stunning but also highly functional. Our web development services include designing responsive, user-friendly interfaces and developing robust back-end systems. Whether you need a corporate website, or an e-commerce platform, or a content management system, we tailor our solutions to meet your specific business needs and enhance your online presence.",
    bgImage: `url(${image1})`,
  },
  {
    id: "service2",
    title: "Mobile App Development",
    description: "Our mobile app development services at Yaks Inc. are designed to deliver seamless, engaging experiences across all devices. We develop high-performance apps for cross-platform environments using the latest technologies. From concept to launch, we handle every aspect of app development, including design, development, and ongoing support, to ensure your app stands out in the crowded mobile market.",
    bgImage: `url(${image2})`,
  },
  {
    id: "service3",
    title: "Custom IT Solutions",
    description: "Yaks Inc. offers customized IT solutions that address your unique business challenges and goals. We analyze your requirements and design bespoke systems that optimize processes, improve efficiency, and solve complex problems. Our solutions range from custom software development to IT infrastructure design, ensuring that our technology aligns perfectly with your business strategy.",
    bgImage: `url(${image3})`,
  },
  {
    id: "service4",
    title: "IT Consulting",
    description: "Yaks Inc. offers expert IT consulting services to guide you through technology decisions and strategy. Our consultants provide insights into best practices, technology trends, and system optimizations to help you achieve your IT goals. Whether you need advice on technology adoption, system integrations, or digital transformation, our team is here to provide strategic guidance and support.",
    bgImage: `url(${image4})`,
  },
  {
    id: "service5",
    title: "Cloud Services",
    description: "Leverage the power of the cloud with Yaks Inc.'s comprehensive cloud services. We provide cloud computing solutions that offer scalability and enhanced security. Our services include cloud migration, infrastructure management, and deployment of cloud-based applications. By adopting cloud technologies, you can reduce costs and ensure your data is secure and accessible from anywhere.",
    bgImage: `url(${image5})`,
  },
  {
    id: "service6",
    title: "Data Engineering",
    description: "At Yaks Inc., we specialize in data engineering to help you make informed decisions through data-driven insights. Our services include designing and implementing data pipelines, managing large-scale data systems, and ensuring data quality. We work with modern tools and technologies to transform raw data into valuable insights that drive business growth and innovation.",
    bgImage: `url(${image6})`,
  },
];

const Service = () => {
  useScrollToSection('serviceSection1');
  useScrollToSection('serviceSection2');
  useScrollToSection('serviceSection3');
  useScrollToSection('serviceSection4');
  useScrollToSection('serviceSection5');
  useScrollToSection('serviceSection6');

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold text-center mb-1">
            Get the <span className="text-blue-500">best services</span>
          </h2>
          <h3 className="text-3xl font-bold text-center mb-9 mr-6">
            for these solutions
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              id={`serviceSection${services.indexOf(service) + 1}`}
              className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group min-h-[300px] flex flex-col"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: service.bgImage }}
              ></div>

              <h3 className="text-xl font-semibold mb-4 text-white absolute top-6 left-6 z-20">
                {service.title}
              </h3>

              <div className="flex-1"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-75 p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 w-full h-full">
                <h1 className="text-xl text-red-500 font-semibold absolute top-6 left-6 hover:shadow-xl hover:cursor-pointer transition-shadow duration-300">
                  {service.title}
                </h1>

                <p className="text-white text-center hover:cursor-pointer mt-12">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
