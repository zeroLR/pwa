import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Test from "./pages/Test";

export default function webRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}
