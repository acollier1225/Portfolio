import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="py-20 sm:mx-28 lg:mx-56 text-4xl mb-48">
      <h1 className="font-advent w-56 mx-auto text-4xl p-4 border-4 my-10 tracking-widest">
        CONTACT
      </h1>
      <div className="text-2xl">
        <br />
        <div>
          <a id="email" href="mailto:ardencollier1297@gmail.com">
            ardencollier1297@gmail.com
          </a>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/arden-collier-602646173/">
        <i className="fab transition duration-500 ease-in-out hover: transform hover:scale-110 fa-linkedin linkedIn"></i>
      </a>
    </div>
  );
};

export default Contact;
