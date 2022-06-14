import * as actions from "./stopwatch.actions";

const INITIAL_STATE = {
  stopwatch: 0,
};

const stopwatchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.INCREMENT_STOPWATCH:
      return { ...state, stopwatch: state.stopwatch + action.payload };
    case actions.RESET_STOPWATCH:
      return { ...state, stopwatch: 0 };
    default:
      return state;
  }
};

export default stopwatchReducer;
