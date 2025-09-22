import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import "./../styles/App.css";

const App = () => {
  // Parent state
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h2>Selected Option: {selectedOption}</h2>
      {/* Pass state updater to children */}
      <ChildComponent1 setSelectedOption={setSelectedOption} />
      <ChildComponent2 setSelectedOption={setSelectedOption} />
    </div>
  );
};

export default App;
