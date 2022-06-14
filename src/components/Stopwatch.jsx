import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementStopwatch,
  resetStopwatch,
} from "../redux/Stopwatch/stopwatch.actions";
import {
  startStopwatch,
  stopStopwatch,
} from "../redux/Running/running.actions";

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { stopwatch } = useSelector((state) => state.stopwatch);
  const { running } = useSelector((state) => state.running);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        dispatch(incrementStopwatch());
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch">
      <span>{("0" + Math.floor((stopwatch / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((stopwatch / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((stopwatch / 10) % 100)).slice(-2)}:</span>

      <div id="button">
        {!running && stopwatch === 0 && (
          <button onClick={() => dispatch(startStopwatch())}>Start</button>
        )}
        {running && (
          <button onClick={() => dispatch(stopStopwatch())}>Stop</button>
        )}
        {stopwatch > 0 && !running && (
          <>
            <button onClick={() => dispatch(startStopwatch())}>Resume</button>
            <button onClick={() => dispatch(resetStopwatch())}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
};
export default Stopwatch;
