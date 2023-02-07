import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import { BrowserRouter as Switch } from "react-router-dom";
import Result from "./Results";

export default function Routes() {
  return (
    <div className="p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Result />}>
            <Route index element={<Result />} />
            <Route path="blogs" element={<Result />} />
            <Route path="contact" element={<Result />} />
            <Route path="*" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
