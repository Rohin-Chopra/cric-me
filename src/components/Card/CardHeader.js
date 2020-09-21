import React from "react";

const CardHeader = ({ className='', children }) => {
  return <div className={`bg-secondary ${className}`}>{children}</div>;
};
export default CardHeader;
