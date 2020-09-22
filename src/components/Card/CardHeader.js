import React from "react";

const CardHeader = ({ className = "", children }) => {
  return (
    <div
      style={{
        boxShadow: "0 10px 10px rgba(0, 0, 0, 1)",
        transform: "scaleY(1.5)",
      }}
      className={`bg-secondary shadow-dark ${className}`}
    >
      {children}
    </div>
  );
};
export default CardHeader;
