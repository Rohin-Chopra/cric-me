import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      {children}
    </div>
  );
};
export default Wrapper;