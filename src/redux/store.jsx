import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import stopwatchReducer from "./Stopwatch/stopwatch.reducer";
import runningReducer from "./Running/running.reducer";

const rootReducer = combineReducers ({
    stopwatch: stopwatchReducer,
    running: runningReducer,
});

const newStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default newStore; 
