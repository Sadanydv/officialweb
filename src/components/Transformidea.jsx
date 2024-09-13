import React from "react";
function Transformidea() {
  return (
    <div className="w-full text-center lg-text-80 mb-8">
      <h1 className="text-heading text-3xl sm:text-5xl lg:text-60">
        {Array.from("Directed by your vision,").map((letter, index) => (
          <span
            key={index}
            className={`inline-block animate-fadeIn ${
              letter === " " ? "mr-2" : ""
            } ${index >= 16 ? " " : ""} `}
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <h1 className="text-heading text-blue-600 text-3xl sm:text-5xl lg:text-80 mt-1 ml-8">
        {Array.from("Perfected by our mastery").map((letter, index) => (
          <span
            key={index}
            className={`inline-block animate-fadeIn ${
              letter === " " ? "mr-2" : ""
            } ${index >= 22 ? " " : ""}`} 
            style={{ animationDelay: `${(index + 30) * 0.02}s` }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Transformidea;
