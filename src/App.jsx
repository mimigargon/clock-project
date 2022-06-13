import React from "react";
import Countdown from "./components/Countdown";
import DigitalClock from "./components/DigitalClock";
import Stopwatch from "./components/Stopwatch";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <DigitalClock />
      <Countdown />
      <Stopwatch/>
    </div>
  );
}

export default App;
