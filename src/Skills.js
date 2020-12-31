import React from "react";

const Skills = () => {
  return (
    <div className="py-20">
      <div className="font-advent w-56 mx-auto text-4xl p-4 border-4 my-10 tracking-widest">
        RESUME
      </div>
      <div className="py-10">
        <div className="bg-white w-52 h-64 mx-auto text-center text-3xl font-bold py-5">
          <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank">
            <div className="py-4 font-advent  w-38 l-2 border-2 rounded-xl overflow-hidden border-black shadow-xl mx-auto transition duration-500 ease-in-out hover: transform hover:scale-110">
              Open Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
