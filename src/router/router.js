import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Test from "./pages/Test";

export default function webRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/test" component={Test} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}
