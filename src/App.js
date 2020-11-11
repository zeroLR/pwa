import React, { Fragment } from "react";
import { Online, Offline } from "react-detect-offline";
import "./App.css";

function App() {
  return (
    <Fragment>
      <h1>hello world!</h1>
      <Online>Online</Online>
      <Offline>Offline</Offline>
    </Fragment>
  );
}

export default App;
