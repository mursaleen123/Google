import React from "react";
import { BrowserRouter as Redirect }  from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import { BrowserRouter as Switch } from "react-router-dom";
import Result from "./Results";

export default function Routes() {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Result />
        </Route>

        <Route path="/users">
          <Result />
        </Route>

        <Route>
          <Result />
        </Route>
      </Switch>
    </div>
  );
}
