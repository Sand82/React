import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import HiThere from "./components/Demo/HiThere";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const clickHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((state) => !state);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  };

  console.log("APP RUNNING");

  return (
    <div className="app">
      <HiThere />
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle </Button>
      <Button onClick={clickHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
