import React from "react";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { closeSnackbar } from "../redux/actions";

const ReusableSnackbar = ({ message, open, closeSnackbar }) => {
  return (
    <Snackbar
      message={message}
      open={open}
      autoHideDuration={2000}
      onClose={closeSnackbar}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    />
  );
};

const mapStateToProps = state => ({
  open: state.open,
  message: state.message
});

export default connect(
  mapStateToProps,
  { closeSnackbar }
)(ReusableSnackbar);
