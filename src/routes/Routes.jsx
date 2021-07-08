import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Chat from "../pages/chat";
import Sidebar from "../pages/sidebar";

const Routes = () => (
  <Router>
    <Sidebar />
    <Switch>
      <Route path="/rooms/:roomId">
        <Chat />
      </Route>
      <Route path="/">
        <Chat />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
