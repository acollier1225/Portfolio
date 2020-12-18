import React from "react";
import headshot from "./headshot.jpg";

const About = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="sm:h-25 md:h-50 w-full object-cover md:w-48"
            src={headshot}
            alt="Headshot"
          />
        </div>
        <div className="p-8">
          <div className="tracking-wide text-xl text-black font-bold">
            Arden Collier
          </div>
          <p className="mt-2 text-gray-500">Full Stack Web Developer</p>
          <p className="mt-2 text-black-500">
            Hello, my name is Arden and I am a Full Stack Web Developer. I have
            experience with the React library as well as Node.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
