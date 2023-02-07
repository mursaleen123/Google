import React from "react";
import { Routes, Route } from "react-router-dom";

import Result from "./Results";

export default function PageRoutes() {
  return (
    <div className="p-4">
      
      <Routes>
        <Route path="/" element={<Result />}>
          <Route index element={<Result />} />
          <Route path="blogs" element={<Result />} />
          <Route path="contact" element={<Result />} />
          <Route path="*" element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}
