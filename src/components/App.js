import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import ReusableSnackbarByMui from "./ReusableSnackbarByMui";
import Buttons from "./Buttons";

class App extends Component {
  render() {
    return (
      <div>
        <Typography>App</Typography>
        <Buttons />
        <ReusableSnackbarByMui />
      </div>
    );
  }
}

export default App;
