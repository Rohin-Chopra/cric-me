import React, { useState, useEffect } from "react";
import { getRandomInt } from "../../utils";

const DynamicPlaceholder = ({
  className,
  options,
  onChange = () => {},
  onKeyDown = () => {},
  value = "",
}) => {
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder(options[getRandomInt(options.length)]);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <input
      onKeyDown={onKeyDown}
      className={className}
      onChange={onChange}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
};

export default DynamicPlaceholder;

//c004351f1d76402d8d45833b9a8e3e25
