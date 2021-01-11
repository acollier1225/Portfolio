import React from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={() => props.collapseSidebar()}
      className="w-full bg-gray-800"
    ></div>
  );
};

export default Backdrop;
