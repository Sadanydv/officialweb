import React, { useState } from 'react';
import CeoImage from './images/CEO.png';

const Team = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false, false, false]);

  const teamMembers = [
    {
      image: CeoImage,
      name: 'Sagar Dhakal',
      description: 'Co-Founder & CEO',
      saying:"Our aim is to build a company that combines innovation with top-notch quality, pushing boundaries and focusing on excellence. We strive to exceed client expectations while ensuring that every project upholds the highest standards of integrity"    },
    {
      image: CeoImage,
      name: 'Amrit Karki',
      description: 'Co-Founder & CTO',
      saying:
        "Our focus is on leveraging cutting-edge technology to drive industry advancements, enhancing system efficiency and security. We are committed to pushing technological limits while ensuring robust solutions that meet the highest standards of performance"
    },
    {
      image: CeoImage,
      name: 'Yubraj Adhikari',
      description: 'Co-Founder & CMO',
      saying:
        "Our strategy is to create compelling brand experiences that resonate with our target audience, driving engagement and loyalty. We aim to innovate in marketing while maintaining a clear and authentic brand message"    },
    {
      image: CeoImage,
      name: 'Suman Sharma',
      description: 'Co-Founder & COO',
      saying:
        "Our focus is to streamline operations and enhance efficiency across all departments, ensuring smooth workflows and timely delivery. We are committed to optimizing processes while maintaining high standards of quality and reliability"
    },
    {
      image: CeoImage,
      name: 'Shridhar Khanal',
      description: 'Co-Founder & CFO',
      saying:
        "Our goal is to manage financial resources effectively, maximizing returns while minimizing risks. We aim to ensure fiscal stability and strategic investment that drive long-term growth and profitability"
    }
  ];

  const handleFlip = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 pt-12 md:p-12 lg:p-20 flex flex-col items-center bg-gray-50 ">
      <h2 className="text-4xl font-semibold  mb-12 text-blue-700 ">Our Team</h2>

      <div className="team-container">
        <div className="first-flip">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="team-member p-4 relative">
              <div className="flip-card">
                <div className="front">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mb-6 mx-auto"
                  />
                  <h3 className="text-2xl font-bold mb-1 text-center">{member.name}</h3>
                  <p className="text-blue-600 text-base text-center">
                    {member.description}
                  </p>
                </div>
                <div className="back">
                  <p className="text-black text-base">{member.saying}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="second-flip">
          {teamMembers.slice(3).map((member, index) => (
            <div key={index} className="team-member p-4 relative">
              <div className="flip-card">
                <div className="front">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mb-6 mx-auto"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-center">{member.name}</h3>
                  <p className="text-blue-600 text-base text-center">
                    {member.description}
                  </p>
                </div>
                <div className="back">
                  <p className="text-black text-base">{member.saying}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
