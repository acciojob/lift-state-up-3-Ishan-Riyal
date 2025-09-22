import React from "react";

const ChildComponent1 = ({ setSelectedOption }) => {
  const handleClick = () => {
    setSelectedOption("Option 1 from Child 1");
  };

  return <button onClick={handleClick}>Child 1 Button</button>;
};

export default ChildComponent1;
