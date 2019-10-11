import React from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import {
  setMessage,
  setOpen,
  handleClose,
  handleExited
} from "../redux/actions";

const ReusableSnackbarByMui = ({
  open,
  message,
  handleClose,
  handleExited
}) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{message ? message : undefined}</span>}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  open: state.open,
  message: state.message
});

export default connect(
  mapStateToProps,
  { setMessage, setOpen, handleExited, handleClose }
)(ReusableSnackbarByMui);
