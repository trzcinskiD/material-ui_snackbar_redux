import {
  CLOSE_SNACKBAR,
  OPEN_ACTION_EXAMPLE_1,
  OPEN_ACTION_EXAMPLE_2
} from "./actions";

const initialState = {
  open: false,
  message: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_SNACKBAR:
      return { open: false, message: "" };
    case OPEN_ACTION_EXAMPLE_1:
      return { open: true, message: "First example snackbar message" };
    case OPEN_ACTION_EXAMPLE_2:
      return { open: true, message: "Second example snackbar message" };
    default:
      return state;
  }
};
