import React from "react";
import { Routes, Route } from "react-router-dom";

import Result from "./Results";

export default function PageRoutes() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/">
          <Result />
        </Route>
      </Routes>
    </div>
  );
}
