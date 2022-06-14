export const START_STOPWATCH = 'START_STOPWATCH';
export const STOP_STOPWATCH = 'STOP_STOPWATCH';

export const startStopwatch = () => dispatch => {
    dispatch ({
        type: START_STOPWATCH,
    })
}

export const stopStopwatch = () => dispatch => {
    dispatch ({
        type: STOP_STOPWATCH, 
    })
}