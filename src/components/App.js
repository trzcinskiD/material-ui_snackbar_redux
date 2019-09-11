import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import ReusableSnackbar from "./ReusableSnackbar";
import ClickableComponent from "./ClickableComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Typography>App</Typography>
        <ClickableComponent />
        <ReusableSnackbar />
      </div>
    );
  }
}

export default App;
