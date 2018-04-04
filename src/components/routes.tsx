import * as React from "react";
import { LoginPage, HomePage } from "@App/components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const createRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </BrowserRouter>
);
