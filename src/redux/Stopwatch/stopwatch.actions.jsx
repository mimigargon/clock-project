export const INCREMENT_STOPWATCH = "INCREMENT_STOPWATCH";
export const RESET_STOPWATCH = "RESET_STOPWATCH";

export const incrementStopwatch = () => (dispatch) => {
  dispatch({
    type: INCREMENT_STOPWATCH,
    payload: 10,
  });
};

export const resetStopwatch = () => (dispatch) => {
  dispatch({
    type: RESET_STOPWATCH,
  });
};
