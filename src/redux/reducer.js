import { SET_MESSAGE, SET_OPEN, HANDLE_CLICK, PROCESS_QUEUE } from "./actions";

const initialState = {
  open: false,
  message: undefined,
  queue: []
};

export const reducer = (state = initialState, { type, message, status }) => {
  switch (type) {
    case SET_MESSAGE:
      return { ...state, message: message };
    case SET_OPEN:
      return { ...state, open: status };
    case HANDLE_CLICK:
      const tempQueueForNewMessage = [...state.queue];
      tempQueueForNewMessage.push(message);
      return { ...state, queue: tempQueueForNewMessage };
    case PROCESS_QUEUE:
      const tempQueueForDeleteFirstMessage = [...state.queue];
      tempQueueForDeleteFirstMessage.shift();
      return { ...state, queue: tempQueueForDeleteFirstMessage };
    default:
      return state;
  }
};
