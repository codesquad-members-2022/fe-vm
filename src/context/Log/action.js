/* Type */
export const ADD_LOG = 'addLog';

/* Dispatch Action */
const addLog = (dispatch, logType, contents) => {
  dispatch({ type: ADD_LOG, payload: { logType, contents } });
};

export const dispatchAction = {
  addLog,
};
