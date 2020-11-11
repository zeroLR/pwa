import { Fragment } from "react";
import { Online, Offline } from "react-detect-offline";
import "./App.css";

import Router from "./router/router";
import Menu from "./components/MenuBar/Navbar";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Menu />
        <Router />
        <Online>
          <h1>網路狀態：連線中</h1>
        </Online>
        <Offline>
          <h1>網路狀態：離線</h1>
        </Offline>
      </div>
    </Fragment>
  );
}

export default App;
