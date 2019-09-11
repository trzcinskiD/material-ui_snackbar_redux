import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { openActionExample_1, openActionExample_2 } from "../redux/actions";

const ClickableComponent = props => {
  return (
    <div>
      <Button onClick={() => props.openActionExample_1()}>Action #1</Button>
      <Button onClick={() => props.openActionExample_2()}>Action #2</Button>
    </div>
  );
};

export default connect(
  null,
  { openActionExample_1, openActionExample_2 }
)(ClickableComponent);
