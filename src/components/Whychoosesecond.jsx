import React from "react";
import Whychoose from "./Whychoose";
import customImage from "./images/itconsulting.avif";

function Whychoosesecond() {
  const customParagraphs = [
    "At Yaks Incorporation, we are committed to powering your digital success. Our team of experts leverages cutting-edge technologies and innovative strategies to deliver solutions that not only meet but exceed your expectations. We help you connect with your audience, convert leads into customers, and conquer your business goals.",
  ];

  const customHeadings = [
    "Expertise in latest technologies",
    "Custom solutions tailored to your needs",
    "Dedicated support and maintenance",
    "Proven track record of success",
  ];

  return (
    <Whychoose
      title="Why Choose Yaks Incorporation"
      subtitle="Accelerate Your Digital Transformation"
      paragraphs={customParagraphs}
      headings={customHeadings}
      image={customImage}
      reverse={true} 
    />
  );
}

export default Whychoosesecond;