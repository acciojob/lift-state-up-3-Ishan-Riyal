import React from "react";

const ChildComponent2 = ({ setSelectedOption }) => {
  const handleClick = () => {
    setSelectedOption("Option 2 from Child 2");
  };

  return <button onClick={handleClick}>Child 2 Button</button>;
};

export default ChildComponent2;
