import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { handleClick } from "../redux/actions";

const Buttons = ({ handleClick }) => {
  return (
    <div>
      <Button onClick={() => handleClick("First example snackbar message")}>
        Action #1
      </Button>
      <Button onClick={() => handleClick("Second example snackbar message")}>
        Action #2
      </Button>
    </div>
  );
};

export default connect(
  null,
  { handleClick }
)(Buttons);
