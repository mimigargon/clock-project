import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const INITIAL_STATE = {
  stopwatch: 0,
  running: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "start":
      console.log("Start");
      return { ...state, running: true };
    case "stop":
      console.log("Stop");
      return { ...state, running: false };
    case "resume":
      console.log("Resume");
      return { ...state, running: true };
    case "reset":
      console.log("Reset");
      return { ...state, stopwatch: 0 };
    case "addTime":
      console.log("Addtime");
      return { ...state, stopwatch: state.stopwatch + action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
