import React, { useState, useEffect, useRef } from "react";

const Faq = () => {
  const faqItems = [
    {
      question: "What service does Yakinc offer?",
      answer:
        "Yaks Inc. provides a range of IT services, including custom web development, mobile app development, and bespoke IT solutions. We specialize in creating high-quality, tailored solutions that meet the unique needs of each client, whether it's for a dynamic website, a robust mobile application, or a comprehensive IT system.",
    },
    {
      question: "How does Yaks Inc. ensure the quality of its projects?",
      answer:
        "YAt Yaks Inc., quality is our top priority. We follow a rigorous development process that includes thorough planning, continuous testing, and regular client feedback. Our team of experts uses best practices and the latest technologies to ensure that every project meets the highest standards of performance, security, and user experience.",
    },
    {
      question: "Can Yaks Inc. handle projects of any size?",
      answer:
        "Yes, Yaks Inc. is equipped to handle projects of all sizes, from small-scale applications to large, complex systems. Our team is experienced in managing diverse projects and scaling our solutions to meet the specific needs of businesses, regardless of their size or industry.",
    },
    {
      question: "How does Yaks Inc. support clients after project completion?",
      answer:
        "Our commitment to client satisfaction extends beyond project completion. We offer ongoing support and maintenance services to ensure that your system or application continues to function optimally. This includes troubleshooting, updates, and enhancements as needed to adapt to evolving requirements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const [counter, setCounter] = useState(0);

  const experienceSectionRef = useRef(null);

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          let currentCount = 0;
          const interval = setInterval(() => {
            currentCount += 1;
            setCounter((prevCount) => (prevCount < 10 ? currentCount : 10));
            if (currentCount >= 10) {
              clearInterval(interval); 
            }
          }, 100);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, 
      }
    );

    if (experienceSectionRef.current) {
      observer.observe(experienceSectionRef.current); 
    }

    return () => {
      if (experienceSectionRef.current) {
        observer.disconnect(); 
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-8 mb-[50px] bg-gray-50 flex flex-row">
      <div className="first_div w-[600px] p-4  ml-[80px] flex flex-col items-start h-[400px]">
        <h1 className="text-2xl font-bold mb-4 text-blue-500 ">FAQ</h1>
        <h2 className="text-xl font-medium">
          Let Yaks Inc Transform
        </h2>
        <h2 className="mb-4 text-blue-500 font-bold text-2xl">
        your Vision into Code
        </h2>
        <p className="mb-6 text-gray-700">
          Website | Mobile Apps | Custom IT Solutions
        </p>
        <div
          className="inside_div p-4 bg-gray-50 rounded-lg shadow-md flex items-center"
          ref={experienceSectionRef}
        >
          <h1 className="text-4xl font-bold text-blue-500 mr-2">{counter}+</h1>
          <p className="text-gray-700 font-semibold pt-5 italic ">years of experience.</p>
        </div>
      </div>
      <div className="second_div w-1/2 p-4 bg-gray-50 relative  h-[400px]">
        {faqItems.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="flex items-center border border-gray-300 rounded-lg p-4 cursor-pointer"
              onClick={() => toggleOpen(index)}
            >
              <button className="w-8 h-8 flex justify-center bg-blue-400 items-center rounded-full border border-blue-500 mr-4 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 text-white bg-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                  />
                </svg>
              </button>
              <h1 className="text-lg font-medium">{item.question}</h1>
            </div>
          </div>
        ))}
        {openIndex !== null && (
          <div
            className={`absolute inset-0  bg-gray-50 mt-[15px] z-10 flex ml-[65px] h-[264px] flex-col w-[660px] pl-9 justify-center`}
          >
            <p className="text-black italic text-left">{faqItems[openIndex].answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
