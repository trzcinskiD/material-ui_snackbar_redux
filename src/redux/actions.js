export const SET_MESSAGE = "SET_MESSAGE";
export const SET_OPEN = "SET_OPEN";
export const HANDLE_CLICK = "HANDLE_CLICK";
export const PROCESS_QUEUE = "PROCESS_QUEUE";

export const setMessage = message => ({ type: SET_MESSAGE, message });

export const setOpen = status => ({ type: SET_OPEN, status });

export const handleClick = message => (dispatch, getState) => {
  dispatch({ type: HANDLE_CLICK, message });
  const { open } = getState();
  if (open) {
    dispatch(setOpen(false));
  } else {
    dispatch(processQueue());
  }
};

export const processQueue = () => (dispatch, getState) => {
  const { queue } = getState();
  if (queue.length > 0) {
    dispatch(setMessage(queue[0]));
    dispatch({ type: PROCESS_QUEUE });
    dispatch(setOpen(true));
  }
};

export const handleClose = (event, reason) => dispatch => {
  if (reason === "clickaway") {
    return;
  }
  dispatch(setOpen(false));
};

export const handleExited = () => dispatch => {
  dispatch(processQueue());
};
